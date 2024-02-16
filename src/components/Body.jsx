import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function Body() {
  return (
    <div className="h-[50%] w-[80%] ml-64">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default Body;
