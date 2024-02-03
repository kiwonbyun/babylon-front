import { BidType } from '@/types/bidInterface';
import { getFormattedDate } from '@/utils/day';
import { getDefaultImagePath, moneyFormatter } from '@/utils/formatter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function BidCard({ bid }: { bid: BidType }) {
  return (
    <li>
      <Link
        href={`/posts/${bid.post.id}`}
        className="border border-solid border-gray200 rounded px-4 py-2 lg:w-[90%] flex flex-col gap-2"
      >
        <span className="text-xs text-gray600">
          입찰날짜 • {getFormattedDate(bid.createdAt)}
        </span>
        <section className="flex gap-2 items-start">
          <div className="relative aspect-video w-40">
            <Image
              alt="post_image"
              src={getDefaultImagePath(bid.post.thumbnails[0])}
              fill
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold line-clamp-1">{bid.post.title}</h3>
            <p className="text-sm text-gray600 flex sm:flex-col">
              <span>미팅 날짜 :</span>
              <span>{getFormattedDate(bid.post.lectureDateTime)}</span>
            </p>
            <p className="font-semibold text-sm flex sm:flex-col">
              <span>현재 최고 입찰가 :</span>
              <span>{moneyFormatter(bid.post.bidPrice)}원</span>
            </p>
            <p className="font-semibold text-red500 text-sm flex sm:flex-col">
              <span>내 입찰가 :</span>
              <span>{moneyFormatter(bid.bidPrice)}원</span>
            </p>
          </div>
        </section>
      </Link>
    </li>
  );
}

export default BidCard;
