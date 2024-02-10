import { LoginUser } from '@/types/authInterface';
import { BidType } from '@/types/bidInterface';
import { Post } from '@/types/postsInterface';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { getPlaiceholder } from 'plaiceholder';

const host =
  'http://ec2-43-200-191-3.ap-northeast-2.compute.amazonaws.com:8000';

export const getPosts = async (query?: string) => {
  const res = await fetch(`${host}/posts${query ?? ''}`, {
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

export const getPostDetail = async (id: string) => {
  const res = await fetch(`${host}/posts/${id}`, {
    cache: 'no-store',
  });
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

const accessToken = () => cookies().get('accessToken')?.value;

export const getUser = async ({ id }: { id?: number }) => {
  if (!id) return null;
  const res = await fetch(`${host}/users/${id}`, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${accessToken()}`,
    },
  });
  const data: LoginUser = await res.json();
  return data;
};

export const getMyBids = async () => {
  const res = await fetch(`${host}/bids/my`, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${accessToken()}`,
    },
  });

  const data: BidType[] = await res.json();
  return data;
};

export const getMyLikes = async () => {
  const res = await fetch(`${host}/users/likes/my`, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${accessToken()}`,
    },
  });

  const data = await res.json();
  return data;
};

export const getIsLiked = async (postId: string) => {
  const res = await fetch(`${host}/users/likes/${postId}`, {
    cache: 'no-store',
    next: { tags: ['like'] },
    // next: { revalidate: 60 * 10, tags: ['like'] },
    headers: {
      Authorization: `Bearer ${accessToken()}`,
    },
  });
  return (await res.json()) as boolean;
};
