"use client";

import React, { useState } from "react";
import ChatList from "./ChatList";
import Header from "./Header";
import HeaderChat from "./HeaderChat";

function Home() {
  const [isSearch, setIsSearch] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const toggleIcon = () => {
    setIsSearch((prev) => !prev);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className=" bg-gray-200 ">
      <div className="bg-[#00a884] h-[127px] max-w-full hidden md:block"></div>

      <div className="flex relative max-w-full md:-mt-[115px] md:ml-[120px] md:mr-[120px] ">
        <div className="bg-[#e9edef]">
          <Header />
          <div className="flex items-center justify-evenly space-x-2 w-[430.5px]  h-[49px] bg-white  mb-[0.5px] ">
            <button
              className="p-1 rounded-lg bg-gray-200 focus:outline-none  w-[376.5px]  ml-4 mr-4"
              onClick={toggleIcon}
            >
              <span className="text-gray-600">
                {isSearch ? (
                  <div className="flex items-center">
                    <svg viewBox="0 0 24 24" className=" h-6 w-6  mr-[32px]">
                      <title>search</title>
                      <path
                        fill="currentColor"
                        d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
                      ></path>
                    </svg>

                    <input
                      type="text"
                      className="text-gray-600 border-gray-300 focus:outline-none bg-[#e5e7eb] "
                      value={inputValue}
                      onChange={handleChange}
                      placeholder="Search or start new chat"
                    />
                  </div>
                ) : (
                  <div className="flex items-center">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 mr-[32px] ">
                      <title>back</title>
                      <path
                        fill="currentColor"
                        d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"
                      ></path>
                    </svg>

                    <input
                      type="text"
                      className="text-gray-600 border-gray-300 focus:outline-none bg-[#e5e7eb] "
                      value={inputValue}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </span>
            </button>

            <button className=" p-2 m-14   rounded-full  focus:outline-none ">
              <span className="text-gray-600" data-icon="filter">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <title>filter</title>
                  <path
                    fill="currentColor"
                    d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <ChatList />
        </div>
        <HeaderChat />
      </div>
    </div>
  );
}

export default Home;
