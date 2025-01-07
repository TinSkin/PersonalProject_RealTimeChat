import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage"

import { query, collection, orderBy, onSnapshot, limit, QuerySnapshot } from "firebase/firestore"
import { db } from "../firebase/firebase"

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt", "desc"), limit(50))
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchMessages.push({ ...doc.data(), id: doc.id });
            });
            const sortedMessage = fetchMessages.sort(
                (a, b) => a.createdAt = b.createdAt
            )
            setMessages(sortedMessage);
        });
        return () => unsubscribe;
    }, []);

    return (
        <main className="chat-box">
            <div className="message-wrapper">
                {messages?.map((message) => {
                    <Message key={message.id} message={message}/>
                })}
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll}/>
        </main>
    )
}

export default ChatBox;