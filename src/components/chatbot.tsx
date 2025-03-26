// import { useState } from "react";
// import { MessageCircle } from "lucide-react";
// import ChatDialog from "./chat-dialog";

// export default function Chatbot() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>
//             {/* Floating Chat Button with Soft Glow on Hover */}
//             {/* <button
//                 onClick={() => setIsOpen(true)}
//                 className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg 
//                 transition-all duration-300 border-2 border-blue-400 hover:shadow-blue-500 hover:shadow-md"
//             >
//                 <MessageCircle className="h-6 w-6" />
//             </button> */}
//             {!isOpen && (
//                 <button
//                     onClick={() => setIsOpen(true)}
//                     className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg 
//         transition-all duration-300 border-2 border-blue-400 hover:shadow-blue-500 hover:shadow-md"
//                 >
//                     <MessageCircle className="h-6 w-6" />
//                 </button>
//             )}

//             {/* Chat Dialog */}
//             {isOpen && <ChatDialog onClose={() => setIsOpen(false)} />}
//         </>
//     );
// }

"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import ChatDialog from "./chat-dialog"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-highlight text-white p-4 rounded-full shadow-lg 
          transition-all duration-300 border-2 border-highlight/40 hover:shadow-highlight/20 hover:shadow-lg
          group z-50"
          aria-label="Open chat assistant"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-10 right-0 bg-card px-3 py-1.5 rounded-lg text-sm font-medium border border-highlight/20 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Ask AI Assistant
          </span>
        </button>
      )}

      {/* Chat Dialog */}
      {isOpen && <ChatDialog onClose={() => setIsOpen(false)} />}
    </>
  )
}

