import React from "react";

const MessageBubble = ({ text, sender, isTemp }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg p-3 shadow-sm transition-colors duration-300
          ${
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-card text-foreground"
          }`}
      >
        {isTemp ? (
          <div className="flex space-x-1 items-center">
            <span className="w-2 h-2 rounded-full bg-border animate-pulse"></span>
            <span className="w-2 h-2 rounded-full bg-border animate-pulse delay-150"></span>
            <span className="w-2 h-2 rounded-full bg-border animate-pulse delay-300"></span>
          </div>
        ) : (
          <div className="whitespace-pre-wrap break-words">{text}</div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
