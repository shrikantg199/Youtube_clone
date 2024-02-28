import { useEffect, useState } from "react";

import { API_KEY } from "../constant/youtube";
import axios from "axios";
import Sidebar from "./Sidebar";

const Shorts = () => {
  const [shorts, setShorts] = useState([]);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  useEffect(() => {
    const fetchShorts = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&videoDuration=short&type=video&maxResults=20&regionCode=IN&key=${API_KEY}`
      );
      console.log(response.data.items);
      setShorts(response.data.items);
    };

    fetchShorts();
  }, []);
  const handleVideoHover = (videoId) => {
    setHoveredVideo(videoId);
  };

  const handleVideoLeave = () => {
    setHoveredVideo(null);
  };

  return (
    <>
      <Sidebar />
      <div className="shorts-feed flex flex-wrap justify-center items-center gap-16  h-screen w-screen p-6 mt-8">
        {shorts.map((item) => (
          <div
            key={item}
            className="flex items-center"
            onMouseEnter={() => handleVideoHover(item.id.videoId)}
            onMouseLeave={handleVideoLeave}
          >
            <iframe
              width="363"
              height="500"
              src={`https://www.youtube.com/embed/${item.id.videoId}?autoplay=${
                hoveredVideo === item.id.videoId ? "1" : "0"
              }`}
              title="The sound off the bat! 🚀🔉 Phil Salt &amp; Jimmy Neesham range hitting #cricketdistrict"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className={`rounded-xl `}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Shorts;
