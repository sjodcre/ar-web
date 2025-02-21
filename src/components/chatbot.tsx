import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatDialog from "./chat-dialog";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Chat Button with Soft Glow on Hover */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg 
                transition-all duration-300 border-2 border-blue-400 hover:shadow-blue-500 hover:shadow-md"
            >
                <MessageCircle className="h-6 w-6" />
            </button>

            {/* Chat Dialog */}
            {isOpen && <ChatDialog onClose={() => setIsOpen(false)} />}
        </>
    );
}
