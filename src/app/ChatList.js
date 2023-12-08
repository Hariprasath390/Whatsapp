import React, { useState } from "react";

import "./scrollbar.css";
import HeaderChat from "./HeaderChat";

const ChatMessage = ({ imageUrl, phoneNumber, message, time, onClick }) => (
  <div className="flex w-[430.5px] h-[72px] bg-[#ffffff] mt-[0.5px] border-b border-gray-100">
    <div
      className="flex justify-between items-center p-4 mb-1"
      onClick={() => {
        console.log("Chat clicked");
        onClick && onClick();
      }}
    >
      <div className="flex items-center">
        <div className="w-11 h-11 mr-4">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full rounded-full"
            draggable="false"
          />
        </div>
      </div>
      <div className="flex flex-grow items-center space-x-4">
        <div>
          <span className="text-sm">{phoneNumber}</span>
          <div className="flex-grow">
            <span className="text-sm text-gray-600 font-sans">{message}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-grow flex justify-end mt-3 mr-3">
      <span className=" text-gray-600 font-sans text-[12px]">{time}</span>
    </div>
  </div>
);

const ChatList = () => {
  const chatData = [
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "Virat Kohli",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },
    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "+91 83029 65398",
      message: "Underwire chia",
      time: "12:47 pm",
    },

    {
      imageUrl:
        "https://pps.whatsapp.net/v/t61.24694-24/390098055_1693915821091190_186553249131515066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSHGaR2BUvac1Fg_-Ty5igj1fnfTViv6akEqnafbybW1g&oe=657AA700&_nc_sid=e6ed6c&_nc_cat=100",
      phoneNumber: "Virat Kohli",
      message: "Underwire chia",
      time: "12:47 pm",
    },

    // Add more data objects as needed
  ];

  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <div
      style={{
        height: "83vh",
        overflowY: "auto",
        width: "430.5px",
        scrollbarWidth: "5px", // For Firefox
        scrollbarColor: "transparent transparent", // For Firefox
      }}
      className="container bg-white"
    >
      {chatData.map((chat, index) => (
        <ChatMessage
          key={index}
          {...chat}
          onClick={() => {
            setSelectedChat(chat);
            console.log("Selected chat:", chat);
          }}
        />
      ))}

    
    </div>
  );
};

export default ChatList;
