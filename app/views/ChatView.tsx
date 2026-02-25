"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Bot, User, Send, Sparkles, Loader2, ShieldCheck } from "lucide-react";

// Define the message structure for a continuous chat
type Message = {
  id: string;
  role: "user" | "ai";
  content: string;
};

const ChatView = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Authentication Check
  useEffect(() => {
    const email = sessionStorage.getItem("userEmail");

    if (!email || !email.endsWith("@sscinc.com")) {
      router.replace("/");
    }
  }, [router]);

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const onSubmit = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content }),
      });

      if (!response.ok) throw new Error("Server response failed");

      const data = await response.json();
      
      const aiMsg: Message = { id: (Date.now() + 1).toString(), role: "ai", content: data.response };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Error submitting message:", error);
      toast.error("An error occurred while connecting to the AI core.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#FAFAFA] font-sans selection:bg-blue-200">
      
      {/* Sleek Top Navigation */}
      <header className="flex-none bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-10 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 shadow-inner">
            <Bot className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                Turbo
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            </h1>
            <p className="text-xs text-slate-500 font-medium">Internal AI Support Bot</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">
          <ShieldCheck className="h-4 w-4" />
          Enterprise Secure
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 scroll-smooth">
        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Empty State / Welcome Screen */}
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-[50vh] text-center animate-in fade-in zoom-in-95 duration-700">
              <div className="h-20 w-20 bg-linear-to-tr from-blue-100 to-cyan-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-white">
                <Sparkles className="h-10 w-10 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">How can I help you today?</h2>
              <p className="text-slate-500 max-w-md text-sm leading-relaxed">
                I&apos;m Turbo, your SS&C Eze AI assistant. Ask me about all things EMS, or just say hi! I&apos;m here to make your workday easier.
              </p>
            </div>
          )}

          {/* Chat Messages */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2`}
            >
              <div className={`flex max-w-[85%] sm:max-w-[75%] gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                
                {/* Avatar */}
                <div className="shrink-0 mt-1">
                  {msg.role === "user" ? (
                    <div className="h-8 w-8 bg-slate-200 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-slate-600" />
                    </div>
                  ) : (
                    <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-sm"
                      : "bg-white border border-slate-100 text-slate-800 rounded-tl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex w-full justify-start animate-in fade-in">
              <div className="flex gap-4">
                <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md shrink-0">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="px-5 py-4 bg-white border border-slate-100 rounded-2xl rounded-tl-sm flex items-center gap-2 shadow-sm">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} className="h-1" />
        </div>
      </main>

      {/* Input Area */}
      <div className="flex-none p-4 bg-linear-to-t from-[#FAFAFA] via-[#FAFAFA] to-transparent pt-10">
        <div className="max-w-3xl mx-auto relative group">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question or type a command..."
            className="w-full min-h-15 max-h-50 resize-none pr-16 pl-6 py-4 bg-white border-slate-200 shadow-[0_2px_15px_rgba(0,0,0,0.04)] focus-visible:ring-blue-500 rounded-3xl text-[15px] transition-all"
            rows={1}
          />
          <Button
            onClick={onSubmit}
            disabled={!input.trim() || isLoading}
            size="icon"
            className="absolute right-2 bottom-2 h-11 w-11 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all disabled:opacity-50 disabled:bg-slate-300 cursor-pointer"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5 ml-0.5" />}
          </Button>
        </div>
        <p className="text-center text-xs text-slate-400 mt-3 font-medium">
          SS&C AI can make mistakes. Verify important information.
        </p>
      </div>

    </div>
  );
};

export default ChatView;