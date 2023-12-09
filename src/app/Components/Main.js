"use client";

import React from "react";
import ChatList from "../ChatList";

function Main() {
  return (
    <div className=" bg-gray-300 ">
      <div className="bg-[#00a884] h-[127px] max-w-full hidden md:block"></div>

      <div className=" relative max-w-full md:-mt-[115px] md:ml-[120px] md:mr-[120px] ">
        <div className="bg-[#e9edef]">
          <ChatList />
        </div>
      </div>
    </div>
  );
}

export default Main;
