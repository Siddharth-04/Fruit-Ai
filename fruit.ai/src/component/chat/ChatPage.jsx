import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import './chat.css'; // Ensure the CSS path is correct

export const ChatPage=()=> {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [date, setDate] = useState("");
  const [theme, setTheme] = useState("light"); // Added theme state

  useEffect(() => {
    // Set current date
    const today = new Date().toLocaleDateString();
    setDate(today);
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add the user's message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);
    setInput("");
    setGeneratingAnswer(true);

    try {
      // Fetch response from API
      const response = await axios({
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDOJOzl5k6Jx7f3WQpXF7QZpVSlkkQA_Ag',
        method: "post",
        data: {
          contents: [{ parts: [{ text: input }] }],
        },
      });

      const reply =
        response.data.candidates[0]?.content?.parts[0]?.text ||
        "Sorry, I did not get a response.";

      // Add the API's response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: reply, sender: "api" },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error fetching response.", sender: "api" },
      ]);
    }

    setGeneratingAnswer(false);
  };

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`chat-page-container ${theme}`}>
      <div className="chat-header">
        <h1>Fruit AI Chat</h1>
        <p>{date}</p>
        <button onClick={handleThemeToggle} className="theme-toggle-btn">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
      <div className="chat-container">
        <div className="message-list">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={generatingAnswer}
          />
          <button
            type="submit"
            disabled={generatingAnswer}
          >
            {generatingAnswer ? 'Sending...' : 'Send'}
          </button>
        </form>

        <NavLink to="/home"><button
        style={{
          padding: '10px 20px',
          backgroundColor: '#000000',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go back
      </button>
      </NavLink>
      </div>
    </div>
  );
}


