import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../constant/youtube";

function VideoCard({ item }) {
  const [yticon, setyticon] = useState("");
  const getYoutubeChannelName = async () => {
    const { data } =
      await axios.get(` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}
    `);
    setyticon(data?.items?.[0]?.snippet?.thumbnails?.high?.url);
    console.log(data?.items?.[0]?.snippet?.thumbnails?.high?.url);
  };
  useEffect(() => {
    getYoutubeChannelName();
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
  return (
    <>
      <div className="flex-col">
        <div className="  h-[45vh] w-[40vh] flex p-2 justify-center relative ">
          <div className="relative">
            {" "}
            <img
              src={item?.snippet?.thumbnails?.high?.url}
              alt=""
              className="relative h-[200px] w-[350px]  rounded-xl "
            />
            <div className="flex ">
              <div className="flex  relative">
                {" "}
                <Avatar
                  alt="Remy Sharp"
                  src={yticon}
                  sx={{ width: 56, height: 56, margin: 1 }}
                />
              </div>

              <div className=" m-2 space-y-1">
                <h1 className="font-bold text-md">
                  {item.snippet.title.slice(0, 30)}
                </h1>
                <h6>{item.snippet.channelTitle}..</h6>
                <div className="flex gap-4 ">
                  {" "}
                  <h6>{formatViews(item.statistics.viewCount)} views</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
