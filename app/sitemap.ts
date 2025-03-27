import { MetadataRoute } from "next";
import { getPosts } from "@/apis/post";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const postsSitemap: MetadataRoute.Sitemap = (posts.data || []).map(
    (post) => ({
      url: `https://woni.blog/posts/${post.slug}`,
      lastModified: post.created_at,
      changeFrequency: "daily",
      priority: 0.9,
    }),
  );

  return [
    {
      url: "https://woni.blog",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    ...postsSitemap,
  ];
}
