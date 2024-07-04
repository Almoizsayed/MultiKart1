// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// const supabase = createClient(supabaseUrl, supabaseKey);
// console.log("Supabase URL:", supabaseUrl);
// console.log("Supabase Key:", supabaseKey);

// export { supabase };
// utils/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseKey);

if (!supabaseUrl) {
  throw new Error("Missing Supabase URL");
}

if (!supabaseKey) {
  throw new Error("Missing Supabase Key");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
0;
