import { getPostDetail } from '@/app/lib/serverFetch';
import Button from '@/components/atoms/Button/Button';
import Divider from '@/components/atoms/Divider';
import YoutubePlayer from '@/components/atoms/YoutubePlayer';
import Heart from '@/components/icons/Heart';
import BidPrice from '@/components/molecules/BidPrice';
import { Post } from '@/types/postsInterface';
import { moneyFormatter } from '@/utils/formatter';
import dayjs from 'dayjs';
import React from 'react';

async function FirmShowingSection({ params }: { params: { id: string } }) {
  const post = await getPostDetail({ id: params.id });
  const firmLinkId = post.firmLink
    ? new URL(post.firmLink).pathname.replaceAll('/', '')
    : null;
  console.log(post);

  const createDate = dayjs(post.createdAt).format('YYYY M D');
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
          <div className="flex items-center gap-1">
            <Heart className="!w-4 !h-4" />
            {post.likeCount}
          </div>
        </div>
      </div>
      <Divider className="my-3" />
      <div className="flex justify-between items-center sm:flex-col sm:gap-4">
        <div className="flex gap-10">
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
        <Button className="bg-red600 text-white hover:bg-white hover:text-red500 hover:font-bold sm:w-full">
          멘토와 식사권 입찰
        </Button>
      </div>
    </section>
  );
}

export default FirmShowingSection;
