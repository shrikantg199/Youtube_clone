import axios from "axios";
import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../constant/youtube.js";
import VideoCard from "./VideoCard.jsx";

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  const fetchingYoutubeVideo = async () => {
    try {
      const { data } = await axios.get(YOUTUBE_VIDEO_API);
      //console.log(data.items);
      setVideos(data?.items);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
  };

  useEffect(() => {
    fetchingYoutubeVideo();
  }, []);

  return (
    <div className="flex flex-wrap  gap-2 py-2 ">
      {videos.map((item, index) => (
        <VideoCard key={index} item={item} />
      ))}
    </div>
  );
}

export default VideoContainer;
