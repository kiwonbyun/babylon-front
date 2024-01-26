'use client';
import Button from '@/components/atoms/Button/Button';
import Photo from '@/components/icons/Photo';
import LabeledInput from '@/components/molecules/LabeledInput';
import { getDefaultImagePath } from '@/utils/formatter';
import Link from 'next/link';
import React, { ChangeEvent, useState, useTransition } from 'react';
import { LoginUser } from '@/types/authInterface';
import { updateUserSA } from '@/lib/serverActions';
import Xmark from '@/components/icons/Xmark';
import { toast } from 'sonner';
import ImageCircle from '@/components/atoms/ImageCircle';
import Loading from '@/components/atoms/Loading';

type ClientImageType = string | null | File;

function EditForm({ user }: { user: LoginUser }) {
  const [clientImage, setClientImage] = useState<ClientImageType>(
    user.profileImage
  );
  const updateUserSAWithId = updateUserSA.bind(null, user.id);
  const [pending, startTransition] = useTransition();

  const getPreviewImageSrc = (image: ClientImageType) => {
    if (image === null) {
      return getDefaultImagePath(null);
    }
    if (image instanceof Object) {
      return URL.createObjectURL(image);
    }
    return image;
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const file = e.target.files[0];
    setClientImage(file);
  };

  const handleDeleteProfile = () => {
    setClientImage(null);
  };

  const updateUser = (formdata: FormData) => {
    formdata.append('profileImage', clientImage ?? '');
    startTransition(() => {
      updateUserSAWithId(formdata)
        .then(() => {
          toast.success('프로필이 수정되었습니다.');
        })
        .catch(() => {
          toast.error('프로필 수정에 실패했습니다.');
        });
    });
  };

  return (
    <form action={updateUser} className="flex flex-col gap-5 items-center">
      <label className="relative cursor-pointer flex flex-col w-fit">
        <ImageCircle
          alt="profile-image"
          src={getPreviewImageSrc(clientImage)}
          className="!w-28 !h-28"
        />
        <div className="w-fit rounded-full p-1 bg-gray200 absolute top-[85px] left-[76px] border-2 border-white border-solid">
          <Photo />
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      <div
        className="w-fit p-1 flex text-xs items-center cursor-pointer"
        onClick={handleDeleteProfile}
      >
        프로필 삭제
        <Xmark className="!w-4 !h-4" />
      </div>

      <LabeledInput
        label="이메일"
        value={user.email}
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
        <Button
          disabled={pending}
          className="!bg-black text-white w-20 flex justify-center items-center"
          type="submit"
        >
          {pending ? <Loading className="stroke-white" /> : '저장'}
        </Button>
        <Link href={'/mypage'}>
          <Button className="!bg-white text-black w-20 border border-black border-solid">
            취소
          </Button>
        </Link>
      </div>
    </form>
  );
}
export default EditForm;
