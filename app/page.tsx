import CategoryList from "@/components/CategoryList";
import { getPosts } from "@/apis/post";
import { getCategories } from "@/apis/category";
import PostList from "@/components/PostList";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { category } = await searchParams;
  const { data: posts } = await getPosts((category as string) ?? undefined);
  const { data: categories } = await getCategories();

  return (
    <>
      <CategoryList
        categories={
          categories?.map((category) => ({
            name: category.name as string,
            slug: category.slug as string,
          })) || []
        }
      />
      <div className="py-4">
        <PostList
          posts={
            posts?.map((post) => ({
              id: post.id,
              title: post.title,
              slug: post.slug,
              category: post.category,
              created_at: post.created_at,
            })) || []
          }
        />
      </div>
    </>
  );
}
