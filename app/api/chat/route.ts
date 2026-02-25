import OpenAI from "openai";



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,

});

export async function POST(req: Request) {
  const { message } = await req.json();
  try {
    const response = await openai.chat.completions.create({
      model: process.env.AI_MODEL || "gpt-5-nano",

      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant for SSC Inc employees. Always respond in a concise and professional manner.",
        },
        {
          role: "user",
          content: message,
        },
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
