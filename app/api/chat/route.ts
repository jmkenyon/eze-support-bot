import { SUPPORT_AGENT_PROMPT } from "@/lib/constants";
import openaiclient from "@/lib/openai";
import { supabase } from "@/lib/supabase";
import { streamText, UIMessage, convertToModelMessages } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();
    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), {
        status: 400,
      });
    }

    const lastMessage = messages[messages.length - 1];
    const message =
      lastMessage?.parts
        ?.filter((p) => p.type === "text")
        ?.map((p) => p.text)
        ?.join(" ") ?? "";

    if (!message.trim()) {
      return new Response(JSON.stringify({ error: "Empty message content" }), {
        status: 400,
      });
    }

    const embeddingResponse = await openaiclient.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    });

    const queryEmbedding = embeddingResponse.data[0].embedding;

    const { data, error } = await supabase.rpc("match_documents", {
      query_embedding: queryEmbedding,
      match_threshold: 0.5,
      match_count: 5,
    });

    if (error) {
      return new Response(
        JSON.stringify({ error: "Failed to retrieve knowledge base context" }),
        { status: 500 }
      );
    }

    const retrievedDocs =
      data?.map((item: { content: string }) => item.content).join("\n---\n") ??
      "";

    const systemPrompt = `
    ${SUPPORT_AGENT_PROMPT}
    
    Use the following knowledge base context to answer:
    
    ${retrievedDocs}
    `;

    const result = await streamText({
      model: openai("gpt-5-nano"),
      messages: await convertToModelMessages([
        {
          role: "system",
          parts: [{ type: "text", text: systemPrompt }],
        },
        ...messages.slice(-8),
      ]),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error generating response:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate response" }),
      { status: 500 }
    );
  }
}
