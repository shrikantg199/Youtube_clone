import { Avatar, Hidden } from "@mui/material";
import Sidebar from "./Sidebar";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../constant/youtube";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FaRegShareSquare } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Comments from "./Comments";
import SuggestedVideo from "./SuggestedVideo";

function Watch() {
  const [searchParams] = useSearchParams();
  const [singleVideo, setsingleVideo] = useState([]);
  const [yticon, setyticon] = useState("");
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const handleReadMoreClick = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };
  const videoId = searchParams.get("v");
  //console.log(videoId);
  const getsingleVideo = async () => {
    try {
      //remove max popular videos
      const { data } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      //console.log(data.items);
      setsingleVideo(data.items);

      const singleVideoData = data.items[0];
      const channelId = singleVideoData.snippet.channelId;
      const channelResponse = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`
      );
      const channelData = channelResponse.data.items[0];

      setyticon(channelData.snippet.thumbnails.default.url);
      // console.log("Subscriber Count:", channelData);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${API_KEY}`
    );
    //console.log(data.items);
  };
  useEffect(() => {
    getsingleVideo();
  }, [videoId, API_KEY]);
  //const [comments, setComments] = useState([]);

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

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Sidebar />

      <div className=" bg-white ml-20 h-auto top-0 left-0 ">
        {" "}
        <div className="flex   h-[80vh] p-4  ">
          <iframe
            className="w-[60%] h-full flex rounded-2xl object-cover"
            src={`https://www.youtube.com/embed/${videoId}?si=4-Vuvv5uSMi8CsJd&autoplay=1 `}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className=" justify-center pt-2 ml-5 h-[200vh] w-[35%] ">
            <h1 className="p-3 text-center text-2xl font-medium">
              Recommended videos
            </h1>
            <SuggestedVideo videoId={videoId} />
          </div>
        </div>
        {singleVideo.map((video) => (
          <div className="ml-2" key={video.id}>
            <h1 className="pt-2 pl-8 w-[60%] text-xl font-bold ">
              {video.snippet.localized.title}
            </h1>
            <div className="flex justify-between  w-[60%]">
              <div className="flex ml-3 p-2 items-center">
                <Avatar
                  alt="Remy Sharp"
                  src={yticon}
                  sx={{ width: 40, height: 40, margin: 1 }}
                  className="z-0 "
                />

                <div className="p-3">
                  <h1 className="font-bold">{video.snippet.channelTitle} </h1>
                  <h1>Lorem, ipsum.</h1>
                </div>
                <button className="h-10 w-24 ml-12 text-white bg-black rounded-xl ">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-4 mr-8">
                <div className=" flex items-center">
                  <div className="flex justify-center gap-1 bg-gray-600/30 rounded-s-xl w-20 py-2 cursor-pointer hover:bg-slate-400/40">
                    <SlLike className="text-xl " />{" "}
                    <span className="text-sm">
                      {formatViews(video.statistics.likeCount)}
                    </span>
                  </div>
                  <div className="flex justify-center bg-slate-600/30 rounded-e-xl   w-12 py-2 cursor-pointer hover:bg-slate-400/40">
                    <SlDislike className=" text-center text-xl " />
                  </div>
                </div>
                <div className=" bg-gray-600/30 cursor-pointer px-6 rounded-xl h-8 pt-1">
                  <div className="flex gap-2 justify-center items-center ">
                    <FaRegShareSquare className="text-xl" />
                    Share
                  </div>
                </div>
                <div className="bg-gray-600/30 cursor-pointer px-6 rounded-xl h-8 pt-1">
                  <div className="flex gap-1">
                    <IoMdDownload className="text-xl" /> download
                  </div>
                </div>
              </div>
            </div>
            <div className="h-auto rounded-xl text-black bg-gray-600/30 py-2  pl-4 ml-3 space-y-6 w-[115vh]">
              <div className=" flex gap-3">
                <h1>
                  {parseInt(video.statistics.viewCount).toLocaleString()} views
                </h1>

                <h1>{formatDate(video.snippet.publishedAt)}</h1>
              </div>
              <div className="p-1 ">
                {isDescriptionExpanded
                  ? video.snippet.localized.description
                  : `${video.snippet.localized.description.slice(0, 300)}...`}
                <span
                  className="text-blue-900 font-bold cursor-pointer"
                  onClick={handleReadMoreClick}
                >
                  {isDescriptionExpanded ? " Read Less" : "Read More"}
                </span>
              </div>
            </div>
            <Comments videoId={videoId} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watch;
