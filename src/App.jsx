import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Box } from "@mui/material";
import VideoDetails from "./components/VideoDetails";
import Feed from "./components/Feed";
import ChannelDetails from "./components/ChannelDetails";
import SearchFeed from "./components/SearchFeed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Sidebar />
      </div>

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search:searchterm" element={<SearchFeed />} />
      </Routes>
    </>
  );
}

export default App;
