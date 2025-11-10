import { useState, KeyboardEvent } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="px-4 py-3">
      <div className="max-w-4xl mx-auto relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about Explainable Science Search (XIR)..."
          disabled={disabled}
          rows={4}
          className={`w-full resize-none rounded-xl px-5 py-3 pr-12 text-base text-gray-100 bg-gray-800/80 border border-gray-700 placeholder-gray-500
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
    disabled:bg-gray-800/40 disabled:cursor-not-allowed
    overflow-y-auto scrollbar-hide`}
        />

        <button
          onClick={handleSend}
          disabled={disabled || !input.trim()}
          className={`absolute bottom-4 right-3 flex items-center justify-center p-2 rounded-lg text-white 
            bg-gradient-to-r from-blue-500 to-indigo-600 
            hover:from-blue-600 hover:to-indigo-700
            active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg
            disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
