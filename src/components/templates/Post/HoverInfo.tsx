import { Post } from '@/types/postsInterface';
import { getFormattedDate } from '@/utils/day';
import React from 'react';

function HoverInfo({ post }: { post: Post }) {
  return (
    <div className="bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-black w-full h-full text-white text-lg md:text-base sm:text-sm p-4 flex flex-col justify-end">
      <p>입찰 마감 날짜: {getFormattedDate(post.auctionEndDateTime)}</p>
      <p>미팅 날짜: {getFormattedDate(post.lectureDateTime)}</p>
      <p>미팅 장소: {post.lectureLocation}</p>
    </div>
  );
}

export default HoverInfo;
