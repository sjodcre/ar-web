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
    // const [typedResponse, setTypedResponse] = useState(""); // Typing effect for AI response
    const welcomeMessage = "Welcome to the matrix. Are you the one?";
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]); // Store full chat history
    const [sessionId, setSessionId] = useState<string | null>(
        localStorage.getItem("chatSessionId") || null
    );



    // // Typing effect for welcome message
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

    useEffect(() => {
        const fetchChatHistory = async () => {
            if (!sessionId) return; // No session, so show welcome message
    
            try {
                const response = await fetch("http://localhost:3001/chat-history", { 
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ sessionId }) 
                });
    
                if (!response.ok) throw new Error("Failed to fetch chat history");
    
                const data = await response.json();
                // console.log("Chat history loaded:", data);
                // console.log("Chat history content:", data.chat); // Log the chat history content
                setChatHistory(data.chat);
            } catch (error) {
                console.error("Error loading chat history:", error);
            }
        };
    
        fetchChatHistory();
    }, [sessionId]); // ✅ Only runs once when sessionId is set
    


    // Typing effect for AI response
    // const typeResponse = async (fullResponse: string) => {
    //     setTypedResponse(""); // Reset response
    //     for (let i = 0; i < fullResponse.length; i++) {
    //         await new Promise(resolve => setTimeout(resolve, 40)); // Slightly faster typing speed
    //         setTypedResponse(prev => prev + fullResponse.charAt(i));
    //     }
    // };

    // const handleSubmit = () => {
    //     if (query.trim() === "") return; // Ignore empty input

    //     const aiResponse = `🤖 AI: You asked "${query}". AI response coming soon! 🚀`;
    //     setQuery(""); // Clear input after sending
    //     typeResponse(aiResponse); // Trigger typing effect
    // };

    // Handle Enter key press
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        if (query.trim() === "") return; // Ignore empty input

        // setTypedResponse(""); // Clear old response
        setIsLoading(true); // Show loading state

        try {
            const response = await fetch("http://localhost:3001/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: query,
                    sessionId: sessionId // ✅ Send only sessionId
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch AI response");
            }

            const data = await response.json();

            console.log("data from query", data)
            if (!sessionId) {
                setSessionId(data.sessionId);
                localStorage.setItem("chatSessionId", data.sessionId); // ✅ Store sessionId
            }
            // // await typeResponse(data.response); // Show AI response dynamically
            // setChatHistory(data.chat); // Update chat history

            setChatHistory(prevHistory => [
                ...prevHistory, // Keep previous chat history
                { role: "user", content: query }, // Append user's message
                { role: "assistant", content: data.response } // Append AI response
            ]);

        } catch (error) {
            console.error("Chat error:", error);
            // setTypedResponse("⚠️ Error: Could not fetch response.");
            setChatHistory(prevHistory => [
                ...prevHistory,
                { role: "user", content: query }, // Still log user's message even if AI fails
                { role: "assistant", content: "⚠️ Error: Could not fetch response." } // Show error message
            ]);
        } finally {
            setIsLoading(false); // Hide loading state
            setQuery(""); // Clear input field

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
            {/* <div className="mt-4 h-40 overflow-y-auto p-2 bg-gray-800/70 rounded shadow-inner text-blue-300">
                {typedMessage && !typedResponse && !isLoading ? <p>{typedMessage}</p> : null}
                {isLoading ? <p>🤖 Typing...</p> : <p>{typedResponse}</p>}
            </div> */}
            <div className="mt-4 h-40 overflow-y-auto p-2 bg-gray-800/70 rounded shadow-inner text-blue-300">
                {!sessionId && typedMessage && !isLoading ? <p>{typedMessage}</p> : null}  {/* ✅ Welcome message */}

                {chatHistory.map((msg, index) => (
                    <p key={index} className={msg.role === "user" ? "text-blue-400" : "text-green-400"}>
                        {msg.role === "user" ? "👤 You: " : "🤖 AI: "}
                        {msg.content}
                    </p>
                ))}

                {isLoading && <p>🤖 Typing...</p>}
            </div>
            {/* Input Field */}
            <div className="mt-4 flex items-center">
                {/* <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type your question..."
                    onKeyDown={handleKeyPress} // ✅ Enter to send
                    className="flex-grow bg-gray-700 text-white p-2 rounded-l focus:outline-none border border-blue-500"
                /> */}
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type your question..."
                    onKeyDown={handleKeyPress}
                    disabled={isLoading} // ✅ Disable while waiting
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
