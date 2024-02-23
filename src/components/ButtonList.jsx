import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory, setHomeVideo } from "../app/slice/appSlice";

function ButtonList() {
  const [active, setActive] = useState("All");
  const ButtonList = [
    "All",
    "javascript",
    "java",
    "Video",
    "news",
    "cricket",
    "comedy",
    "music",
    "gaming",
    "movies",
    "sports",
    "education",
    "science",
    "technology",
    "travel",
    "food",
    "fitness",
    "lifestyle",
  ];
  const dispatch = useDispatch();
  const videoTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
    // alert(tag);
    console.log(tag);
  };
  return (
    <div className="flex items-center py-2  top-[60px] fixed no-scrollbar h-18 bg-white z-10 overflow-x-auto  lg:left-[240px] w-full gap-3">
      {ButtonList.map((buttonName, index) => (
        <button
          key={index}
          onClick={() => videoTag(buttonName)}
          className={`${
            active === buttonName
              ? "bg-blue-700 text-white " // Active button color
              : "bg-gray-500/40 text-white" // Inactive button color
          } lg:px-3 px-2 py-1 lg:py-2  bg-gray-500/40   text-white rounded-xl`}
        >
          <span>{buttonName}</span>
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
