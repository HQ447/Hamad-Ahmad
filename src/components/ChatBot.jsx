"use client";

import { useState } from "react";
import { botData } from "../assets/lib/botData";
import { MessageSquare, X } from "lucide-react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [btnTitle, setBtnTitle] = useState(false);

  // --- REPLY HANDLER ---
  const getBotReply = (userMessage) => {
    const msg = userMessage.toLowerCase();

    for (let item of botData) {
      if (item.keywords.some((k) => msg.includes(k))) {
        return item.answer;
      }
    }

    return "Sorry, I don't understand that yet. Try asking about my skills, experience, or projects!";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getBotReply(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          onMouseOver={() => setBtnTitle(true)}
          onMouseLeave={() => setBtnTitle(false)}
          className="fixed z-50 flex items-center justify-center gap-3 p-4 text-lg text-white transition bg-blue-600 rounded-full shadow-xl bottom-36 sm:bottom-24 right-6 sm:right-10 hover:bg-blue-700"
        >
          <MessageSquare size={26} className="" /> <p className={` ${!btnTitle?"hidden":"flex"} text-lg text-white`}>Chat with Me</p>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          className="
  fixed bottom-6 right-6
  bg-white shadow-2xl border rounded-xl overflow-hidden
  w-80 h-[410px]
  sm:w-96 
  animate-fadeIn z-50
  
  max-sm:bottom-0 max-sm:right-0 
  max-sm:w-full max-sm:h-full max-sm:rounded-none
"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 text-white bg-blue-600">
            <h2 className="text-2xl font-semibold">Chat with Hammad’s Bot 🤖</h2>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-3 h-[300px] overflow-y-auto space-y-2 bg-gray-50 max-sm:h-[70vh]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 max-w-[75%] rounded-lg text-lg ${
                  m.sender === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 bg-white border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 p-2 text-sm border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your question..."
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 text-sm text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
