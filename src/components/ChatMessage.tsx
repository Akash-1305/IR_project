import { Bot, User } from "lucide-react";
import { Message } from "../services/gemini";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex w-full p-4 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex items-start gap-3 max-w-[75%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-md ${
            isUser
              ? "bg-gradient-to-br from-emerald-400 to-teal-500"
              : "bg-gradient-to-br from-blue-500 to-indigo-600"
          }`}
        >
          {isUser ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Bot className="w-4 h-4 text-white" />
          )}
        </div>

        {/* Message Bubble */}
        <div
          className={`flex flex-col ${
            isUser ? "items-end text-right" : "items-start text-left"
          }`}
        >
          <div
            className={`px-4 py-3 rounded-2xl shadow-sm whitespace-pre-wrap leading-relaxed text-sm ${
              isUser
                ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-tr-none"
                : "bg-gray-700 text-gray-100 rounded-tl-none"
            }`}
          >
            {message.content}
          </div>

          <div className="text-xs text-gray-500 mt-1">
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
