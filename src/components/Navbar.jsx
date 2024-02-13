import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiBellOn } from "react-icons/ci";
import logo from "../assets/images/yt-logo.png";
import { CiSearch } from "react-icons/ci";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { RiVideoDownloadFill } from "react-icons/ri";
import { Avatar } from "@mui/material";
function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center sticky top-0">
        <div className="flex items-center gap-5">
          <GiHamburgerMenu className="text-4xl font-semibold m-2" />
          <YouTubeIcon sx={{ fontSize: 52, color: "red" }} />
          <span className="font-bold text-3xl">Youtube</span>
        </div>
        <div className="flex">
          {" "}
          <input
            type="text"
            className="border p-2 py-1 border-gray-500 rounded-s-2xl w-[500px] outline-none"
            placeholder="Search.."
          />
          <CiSearch className="text-3xl bg-gray-200/50 w-12 rounded-e-2xl text-black h-10" />
        </div>
        <div className="flex gap-4 m-3">
          <CiBellOn className="text-4xl text-black" />
          <RiVideoDownloadFill className="text-4xl text-black" />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 40, height: 40, margin: "2px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
