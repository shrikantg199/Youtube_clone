import React from "react";

function ButtonList() {
  const ButtonList = ["All", "javascript", "java", "Video"];
  return (
    <div className=" w-full left-[250px] py-2 top-[60px] bg-white fixed h-18 z-10">
      {ButtonList.map((item, index) => (
        <button
          key={index}
          className="px-3  py-2 m-3 bg-gray-500/40 text-white rounded-xl "
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
