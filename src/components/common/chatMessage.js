import React from "react";
import { ICON_SET } from "../../utils/url";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      <img className="h-10" alt="user-icon" src={ICON_SET.USER_ICON_URL} />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
