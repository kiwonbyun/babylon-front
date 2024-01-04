import { Post } from '@/types/postsInterface';
import Image from 'next/image';
import React from 'react';
import { getPlaiceholder } from 'plaiceholder';
import Button from '../atoms/Button/Button';

const getPosts = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/posts`, {
    cache: 'no-cache',
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

export default async function MainPosts() {
  const posts = await getPosts();

  if (!posts.length) {
    return <div>게시물이 없습니다.</div>;
  }
  const firstPost = posts[0];
  const lastPosts = posts.slice(1);

  return (
    <div className="w-5/6 mx-auto">
      <div className="grid grid-cols-2 gap-4 my-5">
        <article className="flex flex-col justify-center items-start gap-5">
          <h3 className="text-3xl font-bold">{firstPost.title}</h3>
          {firstPost.description && <p>{firstPost.description}</p>}
          <div>
            <span>현재 입찰가</span>
            <span>{firstPost.bidPrice}</span>
          </div>
          <Button className="bg-black text-white font-medium">
            자세히 보기
          </Button>
        </article>
        <figure className="relative aspect-video">
          <Image
            alt="first-thumbnail"
            src={firstPost.thumbnails[0]}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            placeholder="blur"
            blurDataURL={firstPost.base64}
          />
        </figure>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
