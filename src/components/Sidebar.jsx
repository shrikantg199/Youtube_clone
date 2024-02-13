import React from "react";
import { FaHome } from "react-icons/fa";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { MdOutlineManageHistory } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
function Sidebar() {
  return (
    <div>
      <div className="bg-white w-[200px] h-screen   overflow-y-auto py-6 ">
        <div className=" mb-4 flex gap-3 justify-center items-center ">
          {" "}
          <FaHome className="text-lg " />
          <span className="text-lg ">Home</span>
        </div>
        <div className="flex mb-4 gap-3 justify-center items-center">
          {" "}
          <FaHome className="text-lg " />
          <span className="text-lg ">Shorts</span>
        </div>
        <div className="flex mb-4 gap-3 justify-center items-center">
          {" "}
          <SubscriptionsIcon sx={{ fontSize: 20, marginTop: 1 }} />
          <span className="text-lg ">Subscriptions</span>
        </div>
        <hr className="w-auto " />
        <div className="flex mb-4 gap-3 justify-center items-center">
          {" "}
          <SubscriptionsIcon sx={{ fontSize: 20, marginTop: 1 }} />
          <span className="text-lg mt-4">Your Channel</span>
        </div>{" "}
        <div className="flex mb-4 gap-3 justify-center items-center ">
          {" "}
          <MdOutlineManageHistory className="text-xl " />
          <span className="text-lg ">History</span>
        </div>{" "}
        <div className="flex mb-4 gap-3 justify-center items-center ">
          {" "}
          <GoVideo className="text-xl " />
          <span className="text-lg ">Your videos</span>
        </div>{" "}
        <div className="flex mb-4 gap-3 justify-center items-center ">
          {" "}
          <CiClock2 className="text-xl " />
          <span className="text-lg ">Watch Later</span>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;
