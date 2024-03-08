import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  // useEffect hook to fetch data from the API
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("/api/chat");
        setChats(response.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats(); // Call fetchChats function when the component mounts
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
