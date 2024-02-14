import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
function Feed() {
  return (
    <div className=" mt-5 h-full   ml-[200px] w-96 text-white  ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
}

export default Feed;
