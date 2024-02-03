import { fontEmoji } from '@/lib/fonts';
import { getMyBids } from '@/lib/serverFetch';
import clsx from 'clsx';
import React from 'react';
import BidCard from './BidCard';

async function MyBids() {
  const bids = await getMyBids();

  if (!bids.length) {
    return (
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-5">내가 입찰한 미팅</h3>
        <div className="flex-col-box space-y-3">
          <h3>입찰한 미팅이 없습니다.</h3>
          <p>멘토를 만나 통찰력을 얻어보세요.</p>
          <div className={clsx(fontEmoji.className, 'text-6xl')}>🚀</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      <h3 className="text-lg font-semibold mb-5">내가 입찰한 미팅</h3>
      <ul className="flex flex-col gap-2 ">
        {bids.map((bid) => (
          <BidCard bid={bid} key={bid.id} />
        ))}
      </ul>
    </div>
  );
}

export default MyBids;
