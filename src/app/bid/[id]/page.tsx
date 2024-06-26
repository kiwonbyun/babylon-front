import Divider from '@/components/atoms/Divider';
import LabeledBox from '@/components/molecules/LabeledBox';
import LabeledInput from '@/components/molecules/LabeledInput';
import PayButton from '@/components/molecules/PayButton';
import PayMethodRadio from '@/components/templates/Bid/PayMethodRadio';
import { loginCheck } from '@/lib/serverActions';
import { getPostDetail } from '@/lib/serverFetch';
import { moneyFormatter } from '@/utils/formatter';
import dayjs from 'dayjs';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Bid',
};

async function BidPage({ params }: { params: { id: string } }) {
  const user = await loginCheck();
  const post = await getPostDetail(params.id);
  const storeCode = process.env.IMPORT_STORE_CODE as string;

  if (!user) {
    return null;
  }

  return (
    <form className="w-4/5 m-auto flex mt-4 gap-5 md:flex-col sm:flex-col">
      <section className="w-full lg:w-2/3">
        <h1 className="text-2xl font-semibold">식사권 경매 입찰</h1>
        <LabeledBox label="입찰 상품" className="my-6">
          <div className="flex gap-2 sm:flex-col">
            <div className="relative aspect-video w-1/3 sm:w-full">
              <Image
                alt="bid-product"
                src={post.thumbnails[0]}
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                priority
                placeholder="blur"
                // blurDataURL={post.base64}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-lg font-semibold leading-5">
                {post.title}
              </span>
              <span className="text-sm">
                미팅 날짜 :{' '}
                {dayjs(post.lectureDateTime).format('YYYY.MM.DD hh시 mm분')}
              </span>
              <span className="text-sm">멘토 : {post.mentor.name}</span>
            </div>
          </div>
        </LabeledBox>
        <LabeledBox label="주문자" className="my-6">
          <div className="flex flex-col gap-1">
            <LabeledInput
              label="이름"
              horizontal
              name="name"
              className="w-72 sm:w-full"
            />
            <LabeledInput
              label="이메일"
              horizontal
              className="w-72 sm:w-full"
              value={user.email}
              disabled
            />
            <LabeledInput
              label="연락처"
              horizontal
              name="phone"
              placeholder="연락 가능한 휴대폰번호를 입력해주세요"
              className="w-72 sm:w-full"
              type="number"
            />
            <LabeledInput
              label={'현재 ~ 최대 입찰금액'}
              horizontal
              className="w-72 sm:w-full"
              value={`${moneyFormatter(post.bidPrice)} ~ ${moneyFormatter(
                post.maxPrice
              )}`}
              disabled
            />
            <LabeledInput
              label="나의 입찰금액"
              horizontal
              className="w-72 sm:w-full"
              type="number"
              name="bidPrice"
            />
          </div>
        </LabeledBox>
        <LabeledBox label="결제수단" className="my-6">
          <PayMethodRadio />
        </LabeledBox>
      </section>
      <section className="w-full lg:w-1/3 lg:mt-10">
        <div className="border border-solid border-gray200 md:border-none sm:border-none rounded h-96 lg:p-4">
          <h2 className="text-xl">결제금액</h2>
          <Divider className="my-2" />
          <PayButton
            userEmail={user.email}
            currentPrice={post.bidPrice}
            productName={post.title}
            productId={post.id}
            storeCode={storeCode}
          />
        </div>
      </section>
    </form>
  );
}

export default BidPage;
