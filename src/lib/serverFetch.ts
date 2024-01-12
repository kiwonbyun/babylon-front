import { Post } from '@/types/postsInterface';
import { notFound } from 'next/navigation';
import { getPlaiceholder } from 'plaiceholder';

export const getPosts = async (query?: string) => {
  const res = await fetch(`${process.env.SERVER_URL}/posts${query ?? ''}`, {
    // next: { revalidate: 60 * 10 },
    cache: 'no-store',
  });
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const data: Post[] & { error: string } = await res.json();

  if (data.error) {
    notFound();
  }

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
  const data: Post & { error: string } = await res.json();

  if (data?.error) {
    notFound();
  }

  const buffer = await fetch(data.thumbnails[0]).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });
  const { base64 } = await getPlaiceholder(buffer);
  data.base64 = base64;

  return data;
};
