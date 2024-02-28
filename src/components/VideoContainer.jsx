import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_VIDEO_API } from "../constant/youtube.js";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../app/slice/appSlice.js";
// ... (import statements)

function VideoContainer() {
  const { video, category } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchingYoutubeVideo = async () => {
    try {
      const { data } = await axios.get(YOUTUBE_VIDEO_API);
      console.log(data.items);
      dispatch(setHomeVideo(data.items));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error.message);
      // Handle errors if necessary
      setLoading(false);
    }
  };

  const fetchvideoBycategory = async () => {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
      );
      console.log(data.items);
      dispatch(setHomeVideo(data.items));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching videos:", error);
      // Handle errors if necessary
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category === "All") {
      setLoading(true);
      fetchingYoutubeVideo();
    } else {
      setLoading(true);
      fetchvideoBycategory();
    }
  }, [category]);

  return (
    <div className="flex flex-wrap gap-2 py-2 ">
      {loading ? (
        <p>Loading...</p>
      ) : (
        video.map((item) => (
          <Link key={item.id} to={`/watch?v=${item.id}`}>
            <VideoCard item={item} />
          </Link>
        ))
      )}
    </div>
  );
}

export default VideoContainer;
