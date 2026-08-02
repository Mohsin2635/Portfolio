"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I am Mohsin's interactive portfolio assistant. Ask me about agentic workflows, Next.js projects, or technical skills.",
      timestamp: "Just now",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsgText = input.trim();
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulated Bot Auto-Reply
    setTimeout(() => {
      let botResponse = "Thank you for reaching out! Mohsin specializes in building agentic AI pipelines and performant modern web applications.";
      const lower = userMsgText.toLowerCase();

      if (lower.includes("project") || lower.includes("work")) {
        botResponse = "Check out the Projects page to explore the Humanoid Robotics Book Q&A agent, Bandage E-commerce, and this Portfolio Experience site!";
      } else if (lower.includes("skill") || lower.includes("tech")) {
        botResponse = "Mohsin's core tech stack includes Python (OpenAI Agent SDK), TypeScript, Next.js App Router, Three.js, and MySQL.";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire")) {
        botResponse = `You can get in touch via the Contact page or email direct at ${siteConfig.email}!`;
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Panel */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl border border-gold/30 bg-card/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 animate-fade-lift overflow-hidden flex flex-col h-[480px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/80 bg-accent/30 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 border border-gold/40 text-gold">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-semibold text-foreground leading-none">
                  Assistant Stub
                </h4>
                <span className="font-mono text-[10px] text-emerald-400">● Online Placeholder</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent/50 focus:outline-none"
              aria-label="Close Chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex gap-2 max-w-[85%]",
                  msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                <div
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px]",
                    msg.sender === "user"
                      ? "bg-gold text-background font-bold"
                      : "bg-muted text-gold border border-gold/30"
                  )}
                >
                  {msg.sender === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                </div>
                <div
                  className={cn(
                    "rounded-2xl px-3 py-2 leading-relaxed shadow-sm",
                    msg.sender === "user"
                      ? "bg-gold text-background font-medium rounded-tr-none"
                      : "bg-card border border-border/80 text-foreground rounded-tl-none"
                  )}
                >
                  <p>{msg.text}</p>
                  <span
                    className={cn(
                      "block text-[9px] mt-1 text-right opacity-70",
                      msg.sender === "user" ? "text-background" : "text-muted-foreground"
                    )}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="border-t border-border/80 p-3 bg-card/80 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 rounded-lg border border-border bg-background/80 px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <Button type="submit" variant="gold" size="icon" className="h-8 w-8 shrink-0">
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold",
          isOpen
            ? "bg-card text-gold border border-gold"
            : "bg-gold text-background font-bold"
        )}
        aria-label="Open Interactive Chat Assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
}
