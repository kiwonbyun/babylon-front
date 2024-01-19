import Button from '@/components/atoms/Button/Button';
import { loginCheck } from '@/lib/serverActions';
import { getDefaultImagePath } from '@/utils/formatter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function MyPage() {
  const user = await loginCheck();

  return (
    <main className="h-screen">
      <section className="bg-slate900 text-white flex items-center gap-4 justify-center py-10">
        <div className="w-40 h-40 relative sm:w-24 sm:h-24">
          <Image
            alt="profile-image"
            src={getDefaultImagePath(user?.profileImage)}
            fill
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium">{user?.nickname}</h1>
          <Link href={'/mypage/edit'}>
            <Button className="w-fit text-black ">프로필 수정</Button>
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-2 w-4/5 mx-auto pt-6 sm:flex sm:flex-col">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">내가 입찰한 미팅</h3>
          <div className="flex justify-center items-center h-40">
            준비중 입니다.
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">내가 찜한 미팅</h3>
          <div className="flex justify-center items-center h-40">
            준비중 입니다.
          </div>
        </div>
      </section>
    </main>
  );
}

export default MyPage;
