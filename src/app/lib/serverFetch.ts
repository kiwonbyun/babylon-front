import { Post } from '@/types/postsInterface';
import { getPlaiceholder } from 'plaiceholder';

export const getPosts = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/posts`, {
    next: { revalidate: 60 * 10 },
  });
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const data = (await res.json()) as Post[];

  const base64_data = await Promise.all(
    data.map(async (item) => {
      const buffer = await fetch(item.thumbnails[0]).then(async (res) => {
        return Buffer.from(await res.arrayBuffer());
      });
      const { base64 } = await getPlaiceholder(buffer);
      return { ...item, base64 };
    })
  );

  return base64_data;
};

export const getPostDetail = async ({ id }: { id: string }) => {
  const res = await fetch(`${process.env.SERVER_URL}/posts/${id}`, {
    next: { revalidate: 60 * 10 },
  });
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const data: Post = await res.json();

  const buffer = await fetch(data.thumbnails[0]).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });
  const { base64 } = await getPlaiceholder(buffer);
  data.base64 = base64;

  return data;
};
