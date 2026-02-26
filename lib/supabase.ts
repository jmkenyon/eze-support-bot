import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const privateKey = process.env.SUPABASE_API_KEY;

if (!privateKey || !url) {
  throw new Error(
    "SUPABASE_API_KEY and/or SUPABASE_URL is not defined in environment variables."
  );
}

export const supabase = createClient(url, privateKey);
