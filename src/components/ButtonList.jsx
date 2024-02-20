import React, { useState } from "react";

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
    "All",
    "javascript",
    "java",
    "Video",
    "news",
    "cricket",
    "comedy",
    "All",
    "javascript",
    "java",
    "Video",
    "news",
    "cricket",
    "comedy",
  ];
  const videoTag = (tag) => {
    if (active !== tag) {
      setActive(tag);
    }
    console.log(tag);
  };
  return (
    <div className="flex w-full left-10  lg:left-[250px] py-2 top-[60px] fixed no-scrollbar h-18 bg-white z-10 overflow-x-scroll sm:overflow-hidden ">
      {ButtonList.map((buttonName, index) => (
        <button
          key={index}
          onClick={() => videoTag(buttonName)}
          className={`${
            active === buttonName
              ? "bg-blue-500 text-white" // Active button color
              : "bg-gray-500/40 text-white" // Inactive button color
          } lg:px-3 px-2 py-1 lg:py-2 m-3 bg-gray-500/40 text-white rounded-xl`}
        >
          <span>{buttonName}</span>
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
