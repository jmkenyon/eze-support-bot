import openaiclient from "@/lib/openai";

import { supabase } from "@/lib/supabase";

import XAPIQUICKSTART from "../knowledgeBase/xAPIQuickStart";

const embedDocuments = async () => {
  const chunks = XAPIQUICKSTART.split("\n\n---\n\n")
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  let response;
  try {
    response = await openaiclient.embeddings.create({
      model: "text-embedding-3-small",
      input: chunks,
    });
  } catch (err) {
    console.error("Error generating embeddings:", err);
    process.exit(1);
  }

  const rows = chunks.map((chunk, index) => ({
    content: chunk,
    embedding: response.data[index].embedding,
  }));

  const { error } = await supabase.from("documents").insert(rows);

  if (error) {
    console.error("Error inserting embeddings into Supabase:", error);
    process.exit(1);
  } else {
    console.log("Embeddings successfully inserted into Supabase.");
  }
};

embedDocuments().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
