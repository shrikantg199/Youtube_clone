import React from "react";

function ButtonList() {
  const ButtonList = ["All", "javascript", "java", "Video"];
  return (
    <div className="fixed w-full left-[250px] py-3 top-[60px] bg-white">
      {ButtonList.map((item, index) => (
        <button key={index} className="px-3 m-2 bg-red-600">
          {item}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
