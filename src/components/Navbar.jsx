import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiBellOn } from "react-icons/ci";

import { CiSearch } from "react-icons/ci";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { RiVideoDownloadFill } from "react-icons/ri";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../app/slice/appSlice";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div>
      <div className="h-16 top-0 bottom-0 flex fixed justify-between items-center w-full bg-white z-10  ">
        <div className="flex items-center gap-5  ">
          <GiHamburgerMenu
            className="text-2xl font-semibold ml-6 cursor-pointer"
            onClick={toggleHandler}
          />
          <div className="flex justify-center items-center">
            <YouTubeIcon sx={{ fontSize: 52, color: "red" }} />
            <a href="/">
              <span className="font-bold text-2xl">Youtube</span>
            </a>
          </div>
        </div>

        <div className="flex">
          {" "}
          <input
            type="text"
            className="border p-2 py-1 border-gray-200 rounded-s-2xl w-[500px] outline-none hidden lg:block"
            placeholder="Search.."
          />
          <CiSearch className="text-xl  bg-gray-300/30 w-16 p-1 rounded-e-2xl text-black h-10 " />
        </div>
        <div className="flex gap-4 m-3 items-center">
          <CiBellOn className="text-3xl text-black" />
          <RiVideoDownloadFill className="text-3xl text-black" />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 30, height: 30, margin: "2px" }}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
