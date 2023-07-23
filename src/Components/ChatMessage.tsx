import React, { useState } from "react";

// Simulated responses, replace these with actual data from your API or database
const responses: string[] = [
    "Hello!",
    "How can I assist you?",
    "Sorry, I don't have an answer for that.",
    "Please try again later.",
];

const ChatMessage: React.FC = () => {
    const [chatHistory, setChatHistory] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() !== "") {
            setChatHistory([...chatHistory, inputValue]);
            setInputValue("");
            // Simulate a response after 1 second
            setTimeout(() => {
                const randomResponse =
                    responses[Math.floor(Math.random() * responses.length)];
                setChatHistory([...chatHistory, randomResponse]);
            }, 1000);
        }
    };

    return (
        <div>
            <div>
                {chatHistory.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatMessage;
