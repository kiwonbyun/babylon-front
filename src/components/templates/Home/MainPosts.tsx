import { Post } from '@/types/postsInterface';
import React from 'react';
import { getPlaiceholder } from 'plaiceholder';
import PlayBtnImage from '@components/molecules/PlayBtnImage';
import BidPrice from '../../molecules/BidPrice';
import { moneyFormatter } from '@/utils/formatter';

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
    return null;
  }
  const firstPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <div className="w-5/6 mx-auto">
      <div className="grid grid-cols-2 gap-4 my-12">
        <article className="flex flex-col justify-center items-start gap-5 cursor-pointer">
          <h1 className="text-3xl font-bold line-clamp-1 hover:text-gray600">
            {firstPost.title}
          </h1>
          <span className="text-sm font-light text-gray900">
            {firstPost.mentor.name}
          </span>
          {firstPost.description && (
            <p className="break-keep max-w-[80%] leading-6 text-gray900 line-clamp-4">
              {firstPost.description}
            </p>
          )}

          <div className="flex items-center justify-between w-[80%]">
            <BidPrice
              price={moneyFormatter(firstPost.minPrice) + '+'}
              label="최소 입찰가"
            />
            <BidPrice
              price={moneyFormatter(firstPost.bidPrice)}
              label="현재 입찰가"
            />
            <BidPrice
              price={moneyFormatter(firstPost.maxPrice)}
              label="최대 입찰가"
            />
          </div>
        </article>
        <PlayBtnImage
          alt="first-thumbnail"
          src={firstPost.thumbnails[0]}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          placeholder="blur"
          blurDataURL={firstPost.base64}
        />
      </div>
      <ul className="grid grid-cols-3 gap-4">
        {restPosts.map((post) => (
          <li key={post.id} className="w-full cursor-pointer">
            <PlayBtnImage
              alt={`posts-thumbnail-${post.id}`}
              src={post.thumbnails[0]}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
              blurDataURL={post.base64}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div>
              <h3 className="font-bold text-lg text-black break-keep">
                {post.title}
              </h3>
              <span className="text-xs text-gray900 font-light">
                {post.mentor.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
