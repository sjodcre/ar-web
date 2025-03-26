// import { useState, useEffect } from "react";
// import { useRef } from "react";
// import { X } from "lucide-react";

// interface ChatDialogProps {
//     onClose: () => void;
// }

// export default function ChatDialog({ onClose }: ChatDialogProps) {
//     const [query, setQuery] = useState("");
//     // const [response, setResponse] = useState("");
//     const [isVisible, setIsVisible] = useState(false);
//     const [typedMessage, setTypedMessage] = useState(""); // Typing effect for welcome message
//     // const [typedResponse, setTypedResponse] = useState(""); // Typing effect for AI response
//     const welcomeMessage = "Welcome to the matrix. Are you the one?";
//     const [isLoading, setIsLoading] = useState(false); // Loading state
//     const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]); // Store full chat history
//     const [sessionId, setSessionId] = useState<string | null>(
//         localStorage.getItem("chatSessionId") || null
//     );
//     const chatContainerRef = useRef<HTMLDivElement | null>(null);
//     useEffect(() => {
//         if (chatContainerRef.current) {
//             chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//         }
//     }, [chatHistory]); // ✅ Runs every time chatHistory updates



//     // // Typing effect for welcome message
//     useEffect(() => {
//         const typeMessage = async () => {
//             setIsVisible(true);
//             setTypedMessage(""); // Ensure the message starts empty

//             for (let i = 0; i < welcomeMessage.length; i++) {
//                 await new Promise(resolve => setTimeout(resolve, 50)); // Typing speed
//                 setTypedMessage(prev => prev + welcomeMessage.charAt(i));
//             }
//         };

//         typeMessage();
//     }, []);

//     useEffect(() => {
//         const fetchChatHistory = async () => {
//             if (!sessionId) return; // No session, so show welcome message

//             try {
//                 const response = await fetch("http://localhost:3001/chat-history", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({ sessionId })
//                 });

//                 if (!response.ok) throw new Error("Failed to fetch chat history");

//                 const data = await response.json();
//                 // console.log("Chat history loaded:", data);
//                 // console.log("Chat history content:", data.chat); // Log the chat history content
//                 setChatHistory(data.chat);
//             } catch (error) {
//                 console.error("Error loading chat history:", error);
//             }
//         };

//         fetchChatHistory();
//     }, [sessionId]); // ✅ Only runs once when sessionId is set



//     // Typing effect for AI response
//     // const typeResponse = async (fullResponse: string) => {
//     //     setTypedResponse(""); // Reset response
//     //     for (let i = 0; i < fullResponse.length; i++) {
//     //         await new Promise(resolve => setTimeout(resolve, 40)); // Slightly faster typing speed
//     //         setTypedResponse(prev => prev + fullResponse.charAt(i));
//     //     }
//     // };

//     // const handleSubmit = () => {
//     //     if (query.trim() === "") return; // Ignore empty input

//     //     const aiResponse = `🤖 AI: You asked "${query}". AI response coming soon! 🚀`;
//     //     setQuery(""); // Clear input after sending
//     //     typeResponse(aiResponse); // Trigger typing effect
//     // };

//     // Handle Enter key press
//     const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === "Enter") {
//             handleSubmit();
//         }
//     };

//     const handleSubmit = async () => {
//         if (query.trim() === "" || isLoading) return; // ✅ Prevent multiple submissions

//         // if (query.trim() === "") return; // Ignore empty input

//         // setTypedResponse(""); // Clear old response
//         setIsLoading(true); // Show loading state

//         try {
//             const response = await fetch("http://localhost:3001/chat", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     message: query,
//                     sessionId: sessionId // ✅ Send only sessionId
//                 }),
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to fetch AI response");
//             }

//             const data = await response.json();

//             console.log("data from query", data)
//             if (!sessionId) {
//                 setSessionId(data.sessionId);
//                 localStorage.setItem("chatSessionId", data.sessionId); // ✅ Store sessionId
//             }
//             // // await typeResponse(data.response); // Show AI response dynamically
//             // setChatHistory(data.chat); // Update chat history

//             setChatHistory(prevHistory => [
//                 ...prevHistory, // Keep previous chat history
//                 { role: "user", content: query }, // Append user's message
//                 { role: "assistant", content: data.response } // Append AI response
//             ]);

//         } catch (error) {
//             console.error("Chat error:", error);
//             // setTypedResponse("⚠️ Error: Could not fetch response.");
//             setChatHistory(prevHistory => [
//                 ...prevHistory,
//                 { role: "user", content: query }, // Still log user's message even if AI fails
//                 { role: "assistant", content: "⚠️ Error: Could not fetch response." } // Show error message
//             ]);
//         } finally {
//             setIsLoading(false); // Hide loading state
//             setQuery(""); // Clear input field

//         }
//     };


//     return (
//         <div
//         //     className={`fixed bottom-12 right-12 w-[40rem] h-1/2 bg-gray-900/80 text-white p-4 rounded-lg shadow-2xl border border-blue-400 
//         // backdrop-blur-lg transition-all duration-500 transform ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
//         className={`z-10 fixed bottom-4 left-4 right-4 md:bottom-12 md:right-12 md:left-auto w-full max-w-[40rem] h-[35vh] md:h-[40vh] lg:h-[50vh] 
//             bg-gray-900/80 text-white p-4 rounded-lg shadow-2xl border border-blue-400 flex flex-col
//             backdrop-blur-lg transition-all duration-500 transform ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
//         >
//             {/* Header Section */}
//             <div className="flex justify-between items-center border-b border-blue-500 pb-2">
//                 <h2 className="text-lg font-semibold text-blue-400">⚡ Arweave AI</h2>
//                 <button onClick={() => {
//                     setIsVisible(false);
//                     setTimeout(onClose, 300);
//                 }} className="text-gray-400 hover:text-white transition">
//                     <X className="h-5 w-5" />
//                 </button>
//             </div>

//             {/* Chat Display */}
//             {/* <div className="mt-4 h-[75%] overflow-y-auto p-2 bg-gray-800/70 rounded shadow-inner flex flex-col space-y-2"> */}
//             {/* <div className="mt-4 h-[75%] overflow-y-auto bg-gray-800/70 border border-gray-600 rounded-t-lg shadow-inner p-4 flex flex-col space-y-2"> */}
//             {/* <div className="flex-grow overflow-y-auto bg-gray-800/70 border border-gray-600 rounded-t-lg shadow-inner p-4 flex flex-col space-y-2">
//                 {!sessionId && typedMessage && !isLoading ? <p>{typedMessage}</p> : null} 
//                 {chatHistory.map((msg, index) => (
//                     <div
//                         key={index}
//                         className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//                     >
//                         <div
//                             className={`max-w-[75%] p-3 rounded-lg text-sm ${msg.role === "user"
//                                 ? "bg-blue-600 text-white self-end"  // User message
//                                 : "bg-gray-700 text-gray-200 self-start"}`} // AI message
//                         >
//                             {msg.content}
//                         </div>
//                     </div>
//                 ))}
//             </div> */}
//             <div ref={chatContainerRef} className="flex-grow overflow-y-auto bg-gray-800/70 border border-gray-600 rounded-t-lg shadow-inner p-4 flex flex-col space-y-2">
//     {!sessionId && typedMessage && !isLoading ? <p>{typedMessage}</p> : null}

//     {chatHistory.map((msg, index) => (
//         <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
//             <div className={`max-w-[75%] p-3 rounded-lg text-sm ${msg.role === "user" ? "bg-blue-600 text-white self-end" : "bg-gray-700 text-gray-200 self-start"}`}>
//                 {msg.content}
//             </div>
//         </div>
//     ))}
// </div>
//             {/* Input Field */}
//             {/* <div className="mt-4 flex items-center">
//                 <input
//                     type="text"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="Type your question..."
//                     onKeyDown={handleKeyPress}
//                     disabled={isLoading} // ✅ Disable while waiting
//                     className="flex-grow bg-gray-700 text-white p-2 rounded-l focus:outline-none border border-blue-500"
//                 />
//                 <button
//                     onClick={handleSubmit}
//                     className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-all shadow-lg border border-blue-400"
//                 >
//                     🚀
//                 </button>
//             </div> */}
//             {/* <div className="border-t border-gray-600 p-2 flex items-center"> */}
//             {/* <div className="border border-gray-600 p-2 flex items-center bg-gray-800/70 rounded-b-lg"> */}
//             <div className="p-2 flex items-center bg-gray-800/70 border-t border-gray-600">

//                 <input
//                     type="text"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder={isLoading ? "🤖 Typing..." : "Type your question..."} // ✅ Dynamic placeholder
//                     onKeyDown={handleKeyPress}
//                     disabled={isLoading}
//                     className="flex-grow bg-gray-700 text-white p-2 rounded-l focus:outline-none border border-blue-500"
//                 />
//                 <button
//                     onClick={handleSubmit}
//                     className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-all shadow-lg border border-blue-400"
//                 >
//                     🚀
//                 </button>
//             </div>
//         </div>
//     );
// }

"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Send, Loader2 } from "lucide-react"

interface ChatDialogProps {
  onClose: () => void
}

export default function ChatDialog({ onClose }: ChatDialogProps) {
  const [query, setQuery] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [typedMessage, setTypedMessage] = useState("")
  const welcomeMessage = "Hello! I'm your Arweave & AO assistant. How can I help you today?"
  const [isLoading, setIsLoading] = useState(false)
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([])
  const [sessionId, setSessionId] = useState<string | null>(localStorage.getItem("chatSessionId") || null)
  const chatContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory])

  // Typing effect for welcome message
  useEffect(() => {
    const typeMessage = async () => {
      setIsVisible(true)
      setTypedMessage("")

      for (let i = 0; i < welcomeMessage.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 30))
        setTypedMessage((prev) => prev + welcomeMessage.charAt(i))
      }
    }

    typeMessage()
  }, [])

  useEffect(() => {
    const fetchChatHistory = async () => {
      if (!sessionId) return

      try {
        const response = await fetch("http://localhost:3001/chat-history", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        })

        if (!response.ok) throw new Error("Failed to fetch chat history")

        const data = await response.json()
        setChatHistory(data.chat)
      } catch (error) {
        console.error("Error loading chat history:", error)
      }
    }

    fetchChatHistory()
  }, [sessionId])

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    if (query.trim() === "" || isLoading) return

    setIsLoading(true)

    try {
      const response = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: query,
          sessionId: sessionId,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch AI response")
      }

      const data = await response.json()

      if (!sessionId) {
        setSessionId(data.sessionId)
        localStorage.setItem("chatSessionId", data.sessionId)
      }

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: query },
        { role: "assistant", content: data.response },
      ])
    } catch (error) {
      console.error("Chat error:", error)
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: query },
        { role: "assistant", content: "⚠️ Error: Could not fetch response." },
      ])
    } finally {
      setIsLoading(false)
      setQuery("")
    }
  }

  return (
    <div
      className={`z-50 fixed bottom-4 left-4 right-4 md:bottom-12 md:right-12 md:left-auto w-full max-w-[40rem] h-[35vh] md:h-[40vh] lg:h-[50vh] 
        bg-card border-2 border-highlight/70 text-foreground p-4 rounded-lg shadow-xl flex flex-col
        backdrop-blur-lg transition-all duration-500 transform ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center border-b-2 border-secondary/50 pb-2">
        <div className="flex items-center gap-2">
          <div className="bg-highlight/30 p-1.5 rounded-md">
            <div className="h-5 w-5 rounded-full bg-gradient-to-r from-secondary via-highlight to-accent"></div>
          </div>
          <h2 className="text-lg font-semibold text-white">Arweave AI Assistant</h2>
        </div>
        <button
          onClick={() => {
            setIsVisible(false)
            setTimeout(onClose, 300)
          }}
          className="text-white/70 hover:text-white transition p-1.5 hover:bg-secondary/30 rounded-md"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Chat Display */}
      <div
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto bg-black/50 border-2 border-secondary/50 rounded-lg shadow-inner p-4 my-3 flex flex-col space-y-3"
      >
        {!sessionId && typedMessage && !isLoading ? (
          <div className="flex justify-start">
            <div className="max-w-[75%] p-3 rounded-lg text-sm bg-secondary/30 text-white self-start border-2 border-secondary shadow-[0_0_2px_1px_rgba(56,189,248,0.3)]">
              {typedMessage}
            </div>
          </div>
        ) : null}

        {chatHistory.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[75%] p-3 rounded-lg text-sm ${
                msg.role === "user"
                  ? "bg-highlight/40 text-white border-3 border-highlight shadow-[0_0_3px_1px_rgba(168,85,247,0.4)] self-end"
                  : "bg-secondary/30 text-white border-2 border-secondary shadow-[0_0_2px_1px_rgba(56,189,248,0.3)] self-start"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[75%] p-3 rounded-lg text-sm bg-secondary/30 text-white self-start border-2 border-secondary shadow-[0_0_2px_1px_rgba(56,189,248,0.3)] flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-secondary" />
              <span>Thinking...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Field */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isLoading ? "AI is responding..." : "Ask about Arweave or AO..."}
          onKeyDown={handleKeyPress}
          disabled={isLoading}
          className="flex-grow bg-black/60 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight/70 border-2 border-secondary/50 placeholder:text-white/50"
        />
        <button
          onClick={handleSubmit}
          disabled={isLoading || query.trim() === ""}
          className={`p-3 rounded-md transition-all ${
            isLoading || query.trim() === ""
              ? "bg-gray-700 text-gray-400 cursor-not-allowed border border-gray-600"
              : "bg-highlight text-white hover:bg-highlight/90 border-2 border-highlight"
          }`}
          aria-label="Send message"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

