import { createClient } from "@/utils/supabase/client";
import { Database } from "@/types/database.types";

export async function getCategories() {
  const client = createClient<Database>();

  return client.from("categories").select("*");
}
