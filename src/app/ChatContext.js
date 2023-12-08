// ChatContext.js
import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null);

  const setChat = (chat) => {
    setSelectedChat(chat);
    console.log("Selected chat:", chat);
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
