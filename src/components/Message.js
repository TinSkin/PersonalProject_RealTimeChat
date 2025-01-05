import React from "react";

const Message = () => {
    return (
        <div>
            <img className="chat-bubble__left" alt="user avatar" />
            <div className="chat-bubble__right">
                <p className="user-name"></p>
                <p className="user-message"></p>
            </div>
        </div>
    )
}

export default Message;