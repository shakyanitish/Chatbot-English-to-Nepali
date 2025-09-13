import Chat from "./components/Chat";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl flex flex-col">
        {/* Header */}
        <header className="text-center py-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">
            English to Nepali Chatbot
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Type a message in English and get Nepali translation instantly
          </p>
        </header>

        {/* Chat Area */}
        <main className="flex-1 p-4">
          <Chat />
        </main>
      </div>
    </div>
  );
}

export default App;
