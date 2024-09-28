import { useEffect, useState } from 'react';

// Landing Page Component
const LandingPage = ({ setPage }) => (
  <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <header className="p-5 flex justify-between items-center">
      <h1 className="text-3xl font-bold">MindMate AI</h1>
      <nav>
        <button
          onClick={() => setPage('chat')}
          className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition transform hover:scale-105"
        >
          Get Started
        </button>
      </nav>
    </header>
    <main className="container mx-auto mt-20 text-center">
      <h2 className="text-5xl font-bold mb-6 animate-pulse">Your AI Companion for Mental Wellness</h2>
      <p className="text-xl mb-8">Powered by Gemini, tailored for students</p>
      <button
        onClick={() => setPage('chat')}
        className="bg-white text-blue-500 px-8 py-4 rounded-full text-lg shadow-lg hover:bg-blue-100 transition transform hover:scale-105"
      >
        Start Chatting Now
      </button>
    </main>
  </div>
);

// Chat Interface Component
const ChatInterface = ({ setPage }) => {
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm your MindMate AI. How are you feeling today?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs,
          {
            text: "I understand. Can you tell me more about why you're feeling that way?",
            isUser: false,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MindMate AI Chat</h1>
        <button
          onClick={() => setPage('dashboard')}
          className="bg-white text-blue-500 px-4 py-2 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          Dashboard
        </button>
      </header>
      <div className="flex-1 overflow-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-md mx-2 my-1 p-2 rounded-lg shadow-md ${
              message.isUser
                ? 'ml-auto bg-blue-500 text-white'
                : 'mr-auto bg-white text-gray-800'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="bg-white p-4">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message here..."
            className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = ({ setPage }) => {
  const moodData = [
    { day: 'Mon', score: 7 },
    { day: 'Tue', score: 6 },
    { day: 'Wed', score: 8 },
    { day: 'Thu', score: 5 },
    { day: 'Fri', score: 9 },
    { day: 'Sat', score: 7 },
    { day: 'Sun', score: 8 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Your Wellness Dashboard</h1>
        <button
          onClick={() => setPage('chat')}
          className="bg-white text-blue-500 px-4 py-2 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          Back to Chat
        </button>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <h2 className="text-2xl font-bold mb-4">Weekly Mood Tracker</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-end h-64">
            {moodData.map((day, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="bg-blue-500 w-full transition-all ease-in-out"
                  style={{ height: `${day.score * 10}%` }} // Corrected to use template literals
                ></div>
                <span className="mt-2">{day.day}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Upcoming Check-in</h3>
            <p>Your next scheduled check-in is tomorrow at 10:00 AM</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Wellness Tips</h3>
            <ul className="list-disc pl-5">
              <li>Practice deep breathing for 5 minutes</li>
              <li>Take a short walk outside</li>
              <li>Connect with a friend or family member</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div>
      {currentPage === 'landing' && <LandingPage setPage={setCurrentPage} />}
      {currentPage === 'chat' && <ChatInterface setPage={setCurrentPage} />}
      {currentPage === 'dashboard' && <Dashboard setPage={setCurrentPage} />}
    </div>
  );
};

function apps(){
  useEffect(()=>{
    const fetchData=async()=>{
      const res=await fetch('http://localhost:5173/')
    }
  })
}

export { LandingPage, ChatInterface, Dashboard }; // Exporting the components for use in your main app

