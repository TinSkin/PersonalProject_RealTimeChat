import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

import { query, collection, orderBy, onSnapshot, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt", "desc"), limit(50))

        const querySnapshot = getDocs(collection(db, "messages")).then(querySnapshot => {
            const fetchMessages = [];
            querySnapshot.forEach((doc) => {
                // console.log(doc.data().text);
            });
        })

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            // console.log(q)
            // console.log(querySnapshot)
            const fetchMessages = [];
            querySnapshot.forEach((doc) => {
                // fetchMessages.push({ ...doc.data(), id: doc.id });
                console.log(doc.data().text)
            });
            // console.log(fetchMessages)
            // const sortedMessage = fetchMessages.sort(
            //     (a, b) => a.createdAt = b.createdAt
            // )
            // setMessages(sortedMessage);
        });

        // console.log(unsubscribe)
        return () => unsubscribe;
    }, []);

    return (
        <main className="chat-box">
            <div className="messages-wrapper">
                {messages?.map((message) => {
                    <Message key={message.id} message={message} />
                })}
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll} />
        </main>
    )
}

export default ChatBox;