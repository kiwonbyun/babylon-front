import ReportForm from '@/components/templates/ReportForm';
import { fontEmoji } from '@/lib/fonts';
import React from 'react';

function page() {
  return (
    <main className="w-[90%] mx-auto mt-10 space-y-5">
      <h1 className="font-semibold text-2xl">당신의 통찰을 나눠주세요!</h1>
      <p className="break-keep leading-8 text-gray900 text-lg">
        누구든 자신만의 통찰을 나눌 수 있습니다. 당신의 통찰이 누군가에게 큰
        도움이 될 수 있습니다. 어떤 분야에서든 남에게 도움이 될 만한 지식을 가진
        우리 모두는 좋은 선생님이 될 수 있습니다. 여러분이 만나는 다양한
        사람들과 함께 타이탄의 도구를 만들어보세요. 여러분이 공유하는 지식은
        세상을 바꿀 능력의 기반이 될 수 있습니다. 자세한 진행은 바빌론이
        도와드리겠습니다.
      </p>
      <ReportForm
        confirmMessage="멘토 참여 신청하기"
        textAreaDesc="멘토로 참여하고 싶은 이유를 적어주세요."
        header={
          <h1 className="text-xl font-semibold">
            참여 신청 <span className={fontEmoji.className}>😄</span>
          </h1>
        }
      />
    </main>
  );
}

export default page;
