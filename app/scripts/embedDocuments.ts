import openai from "@/lib/openai";

import { supabase } from "@/lib/supabase";

import XAPIQUICKSTART from "../knowledgeBase/xAPIQuickStart";

const embedDocuments = async () => {
  const chunks = XAPIQUICKSTART.split("\n\n---\n\n")
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: chunks,
  });

  const rows = chunks.map((chunk, index) => ({
    content: chunk,
    embedding: response.data[index].embedding,
  }));

  const { error } = await supabase.from("documents").insert(rows);

    if (error) {
        console.error("Error inserting embeddings into Supabase:", error);
    } else {
        console.log("Embeddings successfully inserted into Supabase.");
    }
};

embedDocuments();
