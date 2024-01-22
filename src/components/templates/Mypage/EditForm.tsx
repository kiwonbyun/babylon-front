'use client';
import Button from '@/components/atoms/Button/Button';

import Photo from '@/components/icons/Photo';
import LabeledInput from '@/components/molecules/LabeledInput';
import { User } from '@/types/authInterface';
import { getDefaultImagePath } from '@/utils/formatter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function EditForm({ user }: { user: User }) {
  console.log(user);
  return (
    <form
      encType="multipart/form-data"
      // action={}
      className="flex flex-col gap-5 items-center"
    >
      <label className="relative cursor-pointer flex flex-col w-fit">
        <div className="h-[100px] w-[100px] relative">
          <Image
            src={getDefaultImagePath(user.profileImage)}
            alt="profile-image"
            fill
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <div className="w-fit rounded-full p-1 bg-gray200 absolute top-20 right-1">
          <Photo />
        </div>
        <input type="file" className="hidden" accept="image/*" />
      </label>
      <Button className="text-xs !py-1 !px-2">이미지 삭제</Button>
      <LabeledInput
        label="이메일"
        desc="이메일은 수정할 수 없습니다."
        value={user.email}
        name="email"
        disabled
        className="w-72"
      />
      <LabeledInput
        label="닉네임"
        name="nickname"
        defaultValue={user.nickname}
        className="w-72"
      />
      <div className="flex gap-2">
        <Button className="bg-red600 text-white w-20" type="submit">
          저장
        </Button>
        <Link href={'/mypage'}>
          <Button className="!bg-black text-white w-20">취소</Button>
        </Link>
      </div>
    </form>
  );
}
export default EditForm;
