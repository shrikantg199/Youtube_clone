import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_VIDEO_API } from "../constant/youtube";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
function SuggestedVideo() {
  const [suggested, setsuggested] = useState([]);
  const fetchSuggestedVideos = async (videoId) => {
    try {
      const { data } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            relatedToVideoId: videoId,
            type: "video",
            maxResults: 30, // Adjust as needed
            key: API_KEY,
          },
        }
      );
      console.log(data.items);
      setsuggested(data?.items);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
  };

  useEffect(() => {
    fetchSuggestedVideos();
  }, []);
  const formatViews = (views) => {
    if (views >= 1e6) {
      return `${(views / 1e6).toFixed(1)}M`;
    } else if (views >= 1e3) {
      return `${(views / 1e3).toFixed(1)}K`;
    } else {
      return views.toString();
    }
  };
  const formatRelativeTime = (dateTimeString) => {
    const publishedAt = new Date(dateTimeString);
    return formatDistanceToNow(publishedAt, { addSuffix: true });
  };
  return (
    <>
      <div className=" w-[90%] p-2  h-1/2 flex-col overflow-y-auto ">
        {suggested.map((item, index) => (
          <Link key={index} to={`/watch?v=${item.id.videoId}`}>
            {console.log(item.id.videoId)}
            <div className="flex m-3">
              <img
                src={item?.snippet?.thumbnails?.high?.url}
                alt=""
                className="relative h-[100px] w-[150px]  rounded-xl bg-cover "
              />
              <div className=" ml-4">
                <h1 className=" font-bold">
                  {item.snippet.title.slice(0, 30)}
                </h1>
                <h1 className="">{item.snippet.channelTitle}..</h1>
                <div className="flex gap-3">
                  <h1> {formatRelativeTime(item.snippet.publishedAt)}</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default SuggestedVideo;
