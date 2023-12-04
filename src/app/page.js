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
    <div className=" no-scrollbar ">
      <div className="bg-[#00a884] h-[127px] max-w-full "></div>
      <div className="flex  max-w-full">
        <div className="bg-[#e9edef]">
          <Header />
          <div className="flex items-center justify-evenly space-x-2 w-[430.5px] h-[49px] bg-white  mb-[0.5px] ">
            <button
              className="p-2 rounded-lg bg-gray-200 focus:outline-none  w-[376.5px]  ml-4 mr-4"
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

        {/* <header className="flex   justify-start w-full h-[59px]">
          <div className="flex  " title="Profile Details" role="button">
            <div className="relative h-[40px] w-[40px] ">
              <img
                src="https://pps.whatsapp.net/v/t61.24694-24/300779609_580249773834377_2469441264500027299_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AdS4yOgYbCJ9b_LbW1LUwrS2xqFcMTKGzE_yNVzQy5AGJQ&amp;oe=657ACCCE&amp;_nc_sid=e6ed6c&amp;_nc_cat=105"
                alt=""
                className="object-cover w-full h-full rounded-full"
                draggable="false"
                style={{ visibility: "visible" }}
              />
            </div>
          </div>
          <div className="" role="button w-full ">
            <div className="flex ml-2">
              <div className="min-h-0 w-[922px] h-[21px]">
                <span className="text-black">Ibrahim Shafi</span>
              </div>
            </div>
            <div className="ml-2 w-[922px] h-[20px]">
              <span
                className=" text-black  py-1 rounded-full text-xs"
                title="last seen today at 4:01 pm"
              >
                last seen today at 4:01 pm
              </span>
            </div>
          </div>
          <div className="" role="button">
            <div className="flex items-center p-[8px]">
              <div className="h-6 w-6">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill="currentColor"
                    d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="" role="button">
            <div className="p-[8px]">
              <div className="h-6 w-6">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill="currentColor"
                    d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </header> */}

        <HeaderChat /> 
      </div>
    </div>
  );
}

export default Home;
