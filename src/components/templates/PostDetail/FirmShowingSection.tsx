import { fontPoppinsEN } from '@/lib/fonts';
import { getIsLiked, getPostDetail } from '@/lib/serverFetch';
import Button from '@/components/atoms/Button/Button';
import Divider from '@/components/atoms/Divider';
import YoutubePlayer from '@/components/atoms/YoutubePlayer';
import BidPrice from '@/components/molecules/BidPrice';
import { moneyFormatter } from '@/utils/formatter';
import clsx from 'clsx';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LikeHeartButton from '@/components/molecules/LikeHeartButton';

async function FirmShowingSection({ id }: { id: string }) {
  const [post, isLiked] = await Promise.all([
    getPostDetail(id),
    getIsLiked(id),
  ]);
  const firmLinkId = post.firmLink
    ? new URL(post.firmLink).pathname.replaceAll('/', '')
    : null;

  const createDate = dayjs(post.createdAt).format('YYYY M D');
  const tags = post.keywords.split(',').map((tag) => tag.trim());

  return (
    <section className="w-[65%] lg:h-screen lg:overflow-y-auto scrollbar-hide md:w-full sm:w-full">
      <YoutubePlayer videoId={firmLinkId} className="w-full" />
      <div className="flex flex-col gap-1 mt-2">
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <div className="flex flex-1 flex-wrap items-center text-xs text-gray500 gap-2 ml-1">
          <span>{createDate}</span>
          <span>|</span>
          <span>{post.mentor.name}</span>
          <span>|</span>
          <span>{post.views} views</span>
          <span>|</span>
          <LikeHeartButton
            count={post.likeCount}
            postId={id}
            isLiked={isLiked}
          />
        </div>
      </div>
      <Divider className="my-3" />
      <div className="flex justify-between items-center sm:flex-col sm:gap-4">
        <div className="flex gap-10 sm:w-full sm:justify-between">
          <BidPrice
            axis="x"
            price={moneyFormatter(post.minPrice) + '+'}
            label="최소 입찰가"
          />
          <BidPrice
            price={moneyFormatter(post.bidPrice)}
            label="현재 입찰가"
            axis="x"
          />
          <BidPrice
            price={moneyFormatter(post.maxPrice)}
            label="최대 입찰가"
            axis="x"
          />
        </div>
        <Link href={`/bid/${post.id}`} className="sm:w-full">
          <Button className="bg-red600 text-white hover:bg-white hover:text-red500 hover:font-bold sm:w-full">
            멘토와 식사권 입찰
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-6 py-6">
        <p className="text-sm leading-6">{post.description}</p>
        <div className="flex gap-3">
          {tags.map((tag) => (
            <small
              key={tag}
              className="underline underline-offset-2 text-gray600 text-sm hover:text-gray900 cursor-pointer"
            >
              {tag}
            </small>
          ))}
        </div>
      </div>
      <div>
        <h2 className={clsx(fontPoppinsEN.className, 'text-xl')}>
          About the speaker
        </h2>
        <Divider className="mt-1 mb-3" />
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Image
              alt={`speaker-image-${post.mentor.id}`}
              src={post.mentor.profileImage[0]}
              width={50}
              height={50}
              style={{
                height: '50px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <div className="flex flex-col mt-1">
              <span className="text-sm font-semibold">{post.mentor.name}</span>
              <span className="text-sm text-gray600 font-light">
                {post.mentor.job}
              </span>
            </div>
          </div>
          <p className="text-sm">{post.mentor.detailIntro}</p>
        </div>
      </div>
    </section>
  );
}

export default FirmShowingSection;
