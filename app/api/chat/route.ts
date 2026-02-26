import { SUPPORT_AGENT_PROMPT } from "@/lib/constants";
import openai from "@/lib/openai";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { message, history = [] } = await req.json();
  try {
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    });

    const queryEmbedding = embeddingResponse.data[0].embedding;

    const { data } = await supabase.rpc("match_documents", {
      query_embedding: queryEmbedding,
      match_threshold: 0.5,
      match_count: 5,
    });

    const retrievedDocs =
      data?.map((item: { content: string }) => item.content).join("\n---\n") ??
      "";

    const systemPrompt = `
    ${SUPPORT_AGENT_PROMPT}
    
    Use the following knowledge base context to answer:
    
    ${retrievedDocs}
    `;

    const trimmedHistory = history.slice(-8); // keep last 8 messages max

    const response = await openai.chat.completions.create({
      model: process.env.AI_MODEL || "gpt-5-nano",
      messages: [
        { role: "system", content: systemPrompt },
        ...trimmedHistory,
        { role: "user", content: message },
      ],
    });

    return new Response(
      JSON.stringify({ response: response.choices[0].message.content }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating response:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate response" }),
      { status: 500 }
    );
  }
}
