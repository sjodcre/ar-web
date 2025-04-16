"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRef } from "react"
import { X, Loader2 } from "lucide-react"

interface ChatDialogProps {
  onClose: () => void
}

export default function ChatDialog({ onClose }: ChatDialogProps) {
  const [query, setQuery] = useState("")

  // const [response, setResponse] = useState("");
  const [isVisible, setIsVisible] = useState(true)
  const [typedMessage, setTypedMessage] = useState("") // Typing effect for welcome message
  // const [typedResponse, setTypedResponse] = useState(""); // Typing effect for AI response
  const welcomeMessage = "Welcome to the matrix. Are you the one?"
  const [isLoading, setIsLoading] = useState(false) // Loading state
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]) // Store full chat history
  const [sessionId, setSessionId] = useState<string | null>(localStorage.getItem("chatSessionId") || null)
  const chatContainerRef = useRef<HTMLDivElement | null>(null)
  const [showWelcome, setShowWelcome] = useState(!sessionId)
  const [hasTyped, setHasTyped] = useState(false) // prevent re-typing



  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory]) // ✅ Runs every time chatHistory updates

  // // Typing effect for welcome message
  // useEffect(() => {
  //   const typeMessage = async () => {
  //     setIsVisible(true)
  //     setTypedMessage("") // Ensure the message starts empty

  //     for (let i = 0; i < welcomeMessage.length; i++) {
  //       await new Promise((resolve) => setTimeout(resolve, 50)) // Typing speed
  //       setTypedMessage((prev) => prev + welcomeMessage.charAt(i))
  //     }
  //   }

  //   typeMessage()
  // }, [])

  useEffect(() => {
    if (!showWelcome || hasTyped) return

    const typeMessage = async () => {
      setIsVisible(true)
      setTypedMessage("")
      setHasTyped(true)

      for (let i = 0; i < welcomeMessage.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 50))
        setTypedMessage((prev) => prev + welcomeMessage.charAt(i))
      }
    }

    typeMessage()
  }, [showWelcome, hasTyped])

  // useEffect(() => {
  //   const fetchChatHistory = async () => {
  //     if (!sessionId) return // No session, so show welcome message

  //     try {
  //       const response = await fetch("https://ao-arweave.com/chat-history", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ sessionId }),
  //       })

  //       if (!response.ok) throw new Error("Failed to fetch chat history")

  //       const data = await response.json()
  //       // console.log("Chat history loaded:", data);
  //       console.log("Chat history content:", data.chat); // Log the chat history content
  //       setChatHistory(data.chat)
  //     } catch (error) {
  //       console.error("Error loading chat history:", error)
  //     }
  //   }

  //   fetchChatHistory()
  // }, [sessionId]) // ✅ Only runs once when sessionId is set

  useEffect(() => {
    const fetchChatHistory = async () => {
      console.log("fetching chat history")
      if (!sessionId) return

      try {
        const response = await fetch("https://ao-arweave.com/chat-history", {
        // const response = await fetch("http://localhost:3001/chat-history", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        })

        if (!response.ok) throw new Error("Failed to fetch chat history")

        const data = await response.json()

        if (!data.chat || data.chat.length === 0) {
          // Session is expired, clean it up
          console.warn("Stale session detected, clearing localStorage")
          localStorage.removeItem("chatSessionId")
          setSessionId(null)
          setShowWelcome(true) // 👈 trigger welcome message
          return
        }
        console.log("chat history", data)
        setChatHistory(data.chat)
      } catch (error) {
        console.error("Error loading chat history:", error)
      }
    }

    fetchChatHistory()
  }, [sessionId])


  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    if (query.trim() === "" || isLoading) return // ✅ Prevent multiple submissions

    // if (query.trim() === "") return; // Ignore empty input

    // setTypedResponse(""); // Clear old response
    setIsLoading(true) // Show loading state

    try {
      // const response = await fetch("http://localhost:3001/chat", {
      const response = await fetch("https://ao-arweave.com/chat", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: query,
          sessionId: sessionId, // ✅ Send only sessionId
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch AI response")
      }

      const data = await response.json()

      console.log("data from query", data)
      console.log("sessionId", sessionId)
      if (!sessionId) {
        setSessionId(data.sessionId)
        localStorage.setItem("chatSessionId", data.sessionId) // ✅ Store sessionId
      }
      // // await typeResponse(data.response); // Show AI response dynamically
      // setChatHistory(data.chat); // Update chat history

      setChatHistory((prevHistory) => [
        ...prevHistory, // Keep previous chat history
        { role: "user", content: query }, // Append user's message
        { role: "assistant", content: data.response }, // Append AI response
      ])
    } catch (error) {
      console.error("Chat error:", error)
      // setTypedResponse("⚠️ Error: Could not fetch response.");
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: query }, // Still log user's message even if AI fails
        { role: "assistant", content: "⚠️ Error: Could not fetch response." }, // Show error message
      ])
    } finally {
      setIsLoading(false) // Hide loading state
      setQuery("") // Clear input field
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
          <h2 className="text-lg font-semibold text-white">⚡ Arweave AI</h2>
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
        {/* {!sessionId && typedMessage && !isLoading ? ( */}
        {showWelcome && typedMessage && !isLoading ? (
          <div className="flex justify-start">
            <div className="max-w-[75%] p-3 rounded-lg text-sm bg-secondary/30 text-white self-start border-2 border-secondary shadow-[0_0_2px_1px_rgba(56,189,248,0.3)]">
              {typedMessage}
            </div>
          </div>
        ) : null}

        {chatHistory.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[75%] p-3 rounded-lg text-sm ${msg.role === "user"
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
      <div className="p-2 flex items-center bg-black/50 border-t-2 border-secondary/50">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isLoading ? "🤖 Typing..." : "Type your question..."}
          onKeyDown={handleKeyPress}
          disabled={isLoading}
          className="flex-grow bg-black/60 text-white p-3 rounded-l focus:outline-none border-2 border-secondary/70 placeholder:text-white/50"
        />
        <button
          onClick={handleSubmit}
          disabled={isLoading || query.trim() === ""}
          className="bg-highlight px-4 py-3 rounded-r hover:bg-highlight/90 transition-all shadow-lg border-2 border-highlight text-white"
        >
          🚀
        </button>
      </div>
    </div>
  )
}

