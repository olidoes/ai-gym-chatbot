import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    prompt: "Hello",
  });

  return NextResponse.json({ message: text });
}
