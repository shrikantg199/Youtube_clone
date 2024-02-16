import { Avatar } from "@mui/material";
import Sidebar from "./Sidebar";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../constant/youtube";
function Watch() {
  const [searchParams] = useSearchParams();
  const [singleVideo, setsingleVideo] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const videoId = searchParams.get("v");
  //console.log(videoId);
  const getsingleVideo = async () => {
    try {
      //remove max popular videos
      const { data } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      //console.log(data.items[0]);
      setsingleVideo(data.items);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
  };
  useEffect(() => {
    getsingleVideo();
  }, [videoId, API_KEY]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };
  const formatViews = (views) => {
    if (views >= 1e6) {
      return `${(views / 1e6).toFixed(1)}M`;
    } else if (views >= 1e3) {
      return `${(views / 1e3).toFixed(1)}K`;
    } else {
      return views.toString();
    }
  };
  //hidden sidebar
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Sidebar />
      <div className=" bg-blue-700 ml-44 h-auto top-0 left-0 ">
        {" "}
        <div className="flex   h-[80vh] p-4  ">
          <iframe
            className="w-[60%] h-full flex rounded-2xl object-cover"
            src={`https://www.youtube.com/embed/${videoId}?si=4-Vuvv5uSMi8CsJd&autoplay=1 `}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="flex ml-5 h-[200vh] w-[35%] bg-red-600"></div>
        </div>
        {singleVideo.map((video) => (
          <div className="ml-2" key={video.id}>
            <h1 className="pt-2 pl-8 w-[60%]">
              {video.snippet.localized.title}
            </h1>
            <div className="flex justify-between  w-[60%]">
              <div className="flex ml-3 p-2 items-center">
                <Avatar
                  alt="Remy Sharp"
                  src={``}
                  sx={{ width: 40, height: 40, margin: 1 }}
                  className="z-0 "
                />
                <div className="p-3">
                  <h1>{video.snippet.channelTitle} </h1>
                  <h1>Lorem, ipsum.</h1>
                </div>
                <button className="h-10 w-24 ml-12 text-white bg-black rounded-xl ">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-4 mr-8">
                <h1>like {formatViews(video.statistics.likeCount)}</h1>
                <h1>Share</h1>
                <h1>download</h1>
              </div>
            </div>
            <div className="h-auto bg-black/50 py-2 text-white pl-4 ml-3 space-y-6 w-[115vh]">
              <div className=" flex gap-3">
                <h1>
                  {parseInt(video.statistics.viewCount).toLocaleString()} views
                </h1>

                <h1>{formatDate(video.snippet.publishedAt)}</h1>
              </div>
              <h1 className="p-1"> {video.snippet.localized.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watch;
