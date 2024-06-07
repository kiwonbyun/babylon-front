import Button from '@/components/atoms/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import participationImage from "../../../../public/participation.webp"

function MainParticipation() {
  return (
    <div className="w-[90%] mx-auto my-12 flex gap-6 sm:flex-col">
      <div className="flex flex-col items-start justify-center gap-5 flex-1">
        <Link href={'/participation'}>
          <h1 className="text-3xl font-bold line-clamp-1 hover:text-gray600">
            당신의 통찰을 나눠주세요!
          </h1>
        </Link>
        <p className="break-keep w-5/6 leading-6 text-gray900 sm:line-clamp-3 md:line-clamp-3 sm:w-full md:w-full">
          누구든 자신만의 통찰을 나눌 수 있습니다. 당신의 통찰이 누군가에게 큰
          도움이 될 수 있습니다. 어떤 분야에서든 남에게 도움이 될 만한 지식을
          가진 우리 모두는 좋은 선생님이 될 수 있습니다. 여러분이 만나는 다양한
          사람들과 함께 타이탄의 도구를 만들어보세요. 여러분이 공유하는 지식은
          세상을 바꿀 능력의 기반이 될 수 있습니다. 자세한 진행은 바빌론이
          도와드리겠습니다.
        </p>
        <Link href={'/participation'}>
          <Button className=" bg-slate900 text-white">
            지식 공유자 참여하기
          </Button>
        </Link>
      </div>
      <Link
        href={'/participation'}
        className="relative border border-solid aspect-video w-1/2 sm:w-full"
      >
        <Image
          alt="participant-banner"
          src={participationImage}
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </Link>
    </div>
  );
}

export default MainParticipation;
