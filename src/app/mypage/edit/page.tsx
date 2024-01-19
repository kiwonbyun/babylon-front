import Button from '@/components/atoms/Button/Button';
import LabeledInput from '@/components/molecules/LabeledInput';
import { loginCheck } from '@/lib/serverActions';
import { User } from '@/types/authInterface';
import React from 'react';

async function page() {
  const user = (await loginCheck()) as User;

  return (
    <main className="w-4/5 mx-auto h-screen flex flex-col items-center pt-20 gap-5">
      <LabeledInput
        label="이메일"
        desc="이메일은 수정할 수 없습니다."
        value={user.email}
        disabled
        className="w-72"
      />
      <LabeledInput label="닉네임" value={user.nickname} className="w-72" />
      <div className="flex gap-2">
        <Button className="bg-red600 text-white w-20">저장</Button>
        <Button className="!bg-black text-white w-20">취소</Button>
      </div>
    </main>
  );
}

export default page;
