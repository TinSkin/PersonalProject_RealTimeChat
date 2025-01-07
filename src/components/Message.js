import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase"

const Message = ({ message }) => {
    const [user] = useAuthState(auth);

    return (
        <div className={'chat-bubble'}>
            <img className="chat-bubble__left" alt="user avatar" />
            <div className="chat-bubble__right">
                <p className="user-name">TinSkin</p>
                <p className="user-message">We are building a real time chat app with React and Firebase.</p>
            </div>
        </div>
    )
}

export default Message;