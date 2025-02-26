import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ChatDialogProps {
    onClose: () => void;
}

export default function ChatDialog({ onClose }: ChatDialogProps) {
    const [query, setQuery] = useState("");
    // const [response, setResponse] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [typedMessage, setTypedMessage] = useState(""); // Typing effect for welcome message
    const [typedResponse, setTypedResponse] = useState(""); // Typing effect for AI response
    const welcomeMessage = "Welcome to the matrix. Are you the one?";

    // Typing effect for welcome message
    useEffect(() => {
        const typeMessage = async () => {
            setIsVisible(true);
            setTypedMessage(""); // Ensure the message starts empty

            for (let i = 0; i < welcomeMessage.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 50)); // Typing speed
                setTypedMessage(prev => prev + welcomeMessage.charAt(i));
            }
        };

        typeMessage();
    }, []);

    // Typing effect for AI response
    const typeResponse = async (fullResponse: string) => {
        setTypedResponse(""); // Reset response
        for (let i = 0; i < fullResponse.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 40)); // Slightly faster typing speed
            setTypedResponse(prev => prev + fullResponse.charAt(i));
        }
    };

    const handleSubmit = () => {
        if (query.trim() === "") return; // Ignore empty input

        const aiResponse = `🤖 AI: You asked "${query}". AI response coming soon! 🚀`;
        setQuery(""); // Clear input after sending
        typeResponse(aiResponse); // Trigger typing effect
    };

    // Handle Enter key press
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <div 
            className={`fixed bottom-24 right-6 w-80 bg-gray-900/80 text-white p-4 rounded-lg shadow-2xl border border-blue-400 
                backdrop-blur-lg transition-all duration-500 transform ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
        >
            {/* Header Section */}
            <div className="flex justify-between items-center border-b border-blue-500 pb-2">
                <h2 className="text-lg font-semibold text-blue-400">⚡ Arweave AI</h2>
                <button onClick={() => {
                    setIsVisible(false);
                    setTimeout(onClose, 300);
                }} className="text-gray-400 hover:text-white transition">
                    <X className="h-5 w-5" />
                </button>
            </div>

            {/* Chat Display */}
            <div className="mt-4 h-40 overflow-y-auto p-2 bg-gray-800/70 rounded shadow-inner text-blue-300">
                {typedMessage && !typedResponse ? <p>{typedMessage}</p> : <p>{typedResponse}</p>}
            </div>

            {/* Input Field */}
            <div className="mt-4 flex items-center">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type your question..."
                    onKeyDown={handleKeyPress} // ✅ Enter to send
                    className="flex-grow bg-gray-700 text-white p-2 rounded-l focus:outline-none border border-blue-500"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-all shadow-lg border border-blue-400"
                >
                    🚀
                </button>
            </div>
        </div>
    );
}
