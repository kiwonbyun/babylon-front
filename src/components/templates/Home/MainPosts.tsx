import React from 'react';
import PlayBtnImage from '@components/molecules/PlayBtnImage';
import BidPrice from '../../molecules/BidPrice';
import { moneyFormatter } from '@/utils/formatter';
import GridPosts from './GridPosts';
import { getPosts } from '@/app/lib/serverFetch';
import Link from 'next/link';

export default async function MainPosts() {
  const posts = await getPosts();

  if (!posts.length) {
    return null;
  }
  const firstPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <div className="w-[90%] mx-auto my-12">
      <Link
        className="grid grid-cols-2 gap-4 mb-12"
        href={`posts/${firstPost.id}`}
      >
        <article className="flex flex-col justify-center items-start gap-5">
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
      </Link>
      <GridPosts items={restPosts} />
    </div>
  );
}
