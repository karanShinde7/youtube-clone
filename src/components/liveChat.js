import React, { useEffect, useState } from "react";
import ChatMessage from "./common/chatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/slice/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";

export const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((state) => state.chat.messages);
    const[userMessage, setUserMessage] = useState("");
  // api polling
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API POLLING");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(),
        })
      );
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const addLiveMessage = () => {
    dispatch(addMessage({
        name: "Karan Shinde",
        message: userMessage
    }))
    setUserMessage("");
  }

  return (
    <>
      <div className="flex flex-col-reverse border border-gray-600 bg-slate-100 rounded-xl h-[100%] p-2 overflow-y-scroll">
        {chatMessage?.map((chatObject, index) => {
          return (
            <ChatMessage
              key={index}
              name={chatObject.name}
              message={chatObject.message}
            />
          );
        })}
      </div>
      <div className="flex w-full mt-2">
        <input
          className="border border-gray-500 p-2 w-[90%] rounded-md"
          type="text"
          name="userMessage"
          value={userMessage}
          onChange={(e) => {
            setUserMessage(e.target.value)
          }}
        />
        <img onClick={() => addLiveMessage()} src={require("../assets/send.png")} alt="send" className="cursor-pointer ml-1 mt-1 h-[30px] w-[30px]"/>
      </div>
    </>
  );
};
