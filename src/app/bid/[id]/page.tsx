import Input from '@/components/atoms/Input';
import LabeledBox from '@/components/molecules/LabeledBox';
import LabeledInput from '@/components/molecules/LabeledInput';
import { loginCheck } from '@/lib/serverActions';
import { getPostDetail } from '@/lib/serverFetch';
import { User } from '@/types/authInterface';
import { moneyFormatter } from '@/utils/formatter';
import dayjs from 'dayjs';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

async function BidPage({ params }: { params: { id: string } }) {
  const user = await loginCheck();
  console.log(user);
  const post = await getPostDetail({ id: params.id });

  if (!user) {
    redirect('/login');
  }

  return (
    <main className="w-4/5 m-auto flex mt-4 gap-5">
      <section className="w-2/3">
        <h1 className="text-2xl font-semibold">식사권 경매 입찰</h1>
        <LabeledBox label="입찰 상품" className="my-6">
          <div className="flex gap-2">
            <Image
              alt="bid-product"
              src={post.thumbnails[0]}
              width={150}
              height={150}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
              placeholder="blur"
              blurDataURL={post.base64}
            />
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">{post.title}</span>
              <span>
                미팅 날짜 :{' '}
                {dayjs(post.lectureDateTime).format('YYYY.MM.DD hh시 mm분')}
              </span>
              <span>멘토 : {post.mentor.name}</span>
            </div>
          </div>
        </LabeledBox>
        <LabeledBox label="주문자" className="my-6">
          <div className="flex flex-col gap-1">
            <LabeledInput label="이름" horizontal />
            <LabeledInput
              label="이메일"
              horizontal
              value={user.email}
              disabled
            />
            <LabeledInput
              label="연락처"
              horizontal
              placeholder="연락 가능한 휴대폰번호를 입력해주세요"
              className="w-72"
              type="number"
            />
            <div className="flex gap-4">
              <LabeledInput label="입찰금액" horizontal type="number" />
              <LabeledInput
                label="현재 입찰금액"
                horizontal
                className="w-28"
                value={moneyFormatter(post.bidPrice)}
                disabled
              />
            </div>
          </div>
        </LabeledBox>
      </section>
      <section className="w-1/3">
        <div className="border border-solid border-gray200 rounded h-96 p-4">
          <h2 className="text-xl">결제금액</h2>
        </div>
      </section>
    </main>
  );
}

export default BidPage;
