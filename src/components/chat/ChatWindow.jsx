import React, { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";

const GOOGLE_API_KEY = "AIzaSyASxN3--1n3Aw0c2Ttf9L-2pI96Y-IDxWI";
const GEMINI_MODEL = "gemini-2.5-flash";

const ChatWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Thêm message user
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
    setIsLoading(true);

    // Thêm message AI tạm
    const tempAIIndex = messages.length + 1;
    setMessages((prev) => [...prev, { text: "", sender: "ai", isTemp: true }]);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GOOGLE_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      const data = await response.json();
      const aiResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "AI chưa trả lời gì.";

      // Cập nhật message AI thật
      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === tempAIIndex
            ? { ...msg, text: aiResponse, isTemp: false }
            : msg
        )
      );
    } catch (error) {
      console.error(error);
      setMessages((prev) =>
        prev.map((msg, idx) =>
          idx === tempAIIndex
            ? { ...msg, text: "Xin lỗi, có lỗi xảy ra.", isTemp: false }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 bottom-4 right-4 w-full max-w-md h-[500px] bg-card text-foreground rounded-lg shadow-xl flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="p-4 border-b border-border flex justify-between items-center">
        <h3 className="font-semibold text-lg">Trò chuyện với AI</h3>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close chat"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <MessageBubble
            key={idx}
            text={msg.text}
            sender={msg.sender}
            isTemp={msg.isTemp}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-border bg-background"
      >
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập tin nhắn..."
            className="flex-1 border border-border rounded-lg px-4 py-2 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg text-primary-foreground transition-all duration-300 ${
              isLoading
                ? "bg-primary/50 cursor-not-allowed"
                : "bg-primary hover:brightness-110 active:scale-95"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Đang gửi..." : "Gửi"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;
