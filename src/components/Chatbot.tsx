import { ArrowUp } from "lucide-react";

export function ChatCard() {
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
            <p className="text-sm font-medium text-card-foreground">Chat</p>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl bg-bubble-ai px-4 py-2.5 text-sm leading-relaxed text-card-foreground">
              Hey there! How can I help you today?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl bg-bubble-user px-4 py-2.5 text-sm leading-relaxed text-tertiary ring-1 ring-card-border">
              I have a question about my account.
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl bg-bubble-ai px-4 py-2.5 text-sm leading-relaxed text-card-foreground">
              Sure, I can help with that.
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-card-border px-4 pb-4 pt-3">
        <div className="flex items-end gap-2 rounded-xl bg-input-bg px-3 py-2.5">
          <textarea
            placeholder="Type a message..."
            rows={1}
            className="max-h-32 min-h-[24px] flex-1 resize-none self-center bg-transparent text-sm leading-relaxed text-card-foreground outline-none placeholder:text-muted-foreground"
            aria-label="Message input"
          />
          <button
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-tertiary transition-opacity disabled:opacity-30"
            aria-label="Send message"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
