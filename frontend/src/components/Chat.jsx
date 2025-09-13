import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { userMessage: input, botReply: "" };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true); // Start loading

    try {
      const response = await axios.post("http://localhost:4002/chat", {
        user: "user1",
        text: input
      });

      // Check if response contains botReply
      const botReply =
        response?.data?.botReply || "Sorry, I could not understand.";

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { userMessage: input, botReply }
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { userMessage: input, botReply: "Server error, try again." }
      ]);
    } finally {
      setInput("");
      setLoading(false); // Stop loading
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex flex-col h-[500px] p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-3">
            <div className="text-right">
              <span className="inline-block bg-purple-200 text-purple-800 px-4 py-2 rounded-l-2xl rounded-tr-2xl">
                {msg.userMessage}
              </span>
            </div>
            {msg.botReply && (
              <div className="text-left mt-1">
                <span className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-r-2xl rounded-tl-2xl">
                  {msg.botReply}
                </span>
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="text-left mt-1">
            <span className="inline-block bg-gray-100 text-gray-500 px-4 py-2 rounded-r-2xl rounded-tl-2xl animate-pulse">
              Bot is typing...
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSend}
          className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
