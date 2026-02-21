import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import gymData from "@/lib/gym_data.json";

const systemPrompt = fs.readFileSync(
  path.join(process.cwd(), "src/lib/system_prompt.xml"),
  "utf-8",
);

const system = `${systemPrompt}\n\n<gym_data>\n${JSON.stringify(gymData, null, 2)}\n</gym_data>`;

export async function POST(request: NextRequest) {
  const { messages } = await request.json();

  const latest = messages[messages.length - 1];
  const content = latest?.role === "user" ? latest.content : null;

  if (!content) {
    return NextResponse.json({ message: null });
  }

  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    system,
    messages,
  });
  return NextResponse.json({ message: text });
}
