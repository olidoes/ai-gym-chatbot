"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

import { ArrowUp } from "lucide-react";
import ReactMarkdown from "react-markdown";

export function ChatCard() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function callAPI(messages: Message[]) {
    const response = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });

    const data = await response.json();
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.message },
    ]);
  }

  async function handleSubmit() {
    const newMessages = [
      ...messages,
      { role: "user" as const, content: input },
    ];
    setMessages(newMessages);
    setInput("");
    await callAPI(newMessages);
  }

  return (
    <div className="flex h-[600px] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-card-border bg-card shadow-lg">
      {/* Header */}
      <div className="flex items-center border-b border-card-border px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
            <span className="text-xs font-medium text-muted-foreground">
              AI
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-card-foreground">GymBot</p>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex flex-col gap-3">
          {messages.map((message, index) =>
            message.role === "user" ? (
              <div key={index} className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl bg-bubble-user px-4 py-2.5 text-sm leading-relaxed text-tertiary ring-1 ring-card-border">
                  {message.content}
                </div>
              </div>
            ) : (
              <div key={index} className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl bg-bubble-ai px-4 py-2.5 text-sm leading-relaxed text-card-foreground">
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
            ),
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-card-border px-4 pb-4 pt-3">
        <div className="flex items-end gap-2 rounded-xl bg-input-bg px-3 py-2.5">
          <textarea
            placeholder="Type a message..."
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            className="max-h-32 min-h-[24px] flex-1 resize-none self-center bg-transparent text-sm leading-relaxed text-card-foreground outline-none placeholder:text-muted-foreground"
            aria-label="Message input"
          />
          <button
            onClick={handleSubmit}
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary text-tertiary transition-opacity disabled:opacity-30"
            aria-label="Send message"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
