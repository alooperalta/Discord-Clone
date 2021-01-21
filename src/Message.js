import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message({ message }) {
  return (
    <div className="message">
      <Avatar src={message.user.photo} />
      <div className="message__info">
        <h4>
          {message.user.displayName}
          <span className="message__timestamp">
            {new Date(message.timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message.message}</p>
      </div>
    </div>
  );
}

export default Message;
