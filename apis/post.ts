import { createClient } from "@/utils/supabase/client";
import { Database } from "@/types/database.types";

export async function getPosts(category?: string) {
  const client = createClient<Database>();

  if (category)
    return client
      .from("posts")
      .select("*, category ( name, slug )")
      .eq("category", category)
      .order("created_at", { ascending: false });

  return client
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
}

export async function getPostBySlug(slug: string) {
  const client = createClient<Database>();

  return client
    .from("posts")
    .select("*, category ( name, slug )")
    .eq("slug", slug);
}
