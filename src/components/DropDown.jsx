import React from "react";
import useClickOutSide from "../hook/useClickOutSide";

const DropDown = () => {
  const { show, handleSelected, nodeRef } = useClickOutSide();
  return (
    <div className=" relative w-full max-w-[400px]" ref={nodeRef}>
      <div
        className="p-5 border border-gray-300 rounded-lg w-full cursor-pointer"
        onClick={handleSelected}
      >
        Selected
      </div>
      {show && (
        <div className="border border-gray-300 rounded-lg absolute top-full left-0 w-full bg-white">
          <div className="p-5 cursor-pointer hover:bg-gray-100">NodeJS</div>
          <div className="p-5 cursor-pointer hover:bg-gray-100">ReactJS</div>
          <div className="p-5 cursor-pointer hover:bg-gray-100">JavaScript</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
