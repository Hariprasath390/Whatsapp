// Create a new file, e.g., ChatContext.js
import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null);

  const setChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <ChatContext.Provider value={{ selectedChat, setChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};
