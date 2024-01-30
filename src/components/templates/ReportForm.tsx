'use client';
import React from 'react';
import Button from '../atoms/Button/Button';
import LabeledInput from '../molecules/LabeledInput';
import LabeledTextArea from '../molecules/LabeledTextArea';
import { fontEmoji } from '@/lib/fonts';
import { errorReportSA } from '@/lib/serverActions';
import { useFormState } from 'react-dom';
import Exclamation from '../icons/Exclamation';

function ReportForm() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(errorReportSA, initialState);

  return (
    <section className="mt-20 flex-col-box gap-10 mb-20">
      <h2>
        오류를 제보해주시면 빠르게 개선하겠습니다
        <span className={fontEmoji.className}>😅</span>
      </h2>
      <form className="flex flex-col gap-4 w-1/3" action={dispatch}>
        <LabeledInput
          className="w-full"
          error={state.errors?.name}
          name="name"
          label="이름"
        />
        <LabeledInput
          className="w-full"
          error={state.errors?.email}
          name="email"
          label="이메일"
        />
        <LabeledTextArea
          className="w-full h-44"
          desc="오류 내용을 입력해주세요"
          name="content"
          error={state.errors?.content}
          label="오류 내용"
        />
        {state?.message && (
          <p className="text-xs text-red500 flex items-center gap-1">
            <Exclamation className="h-4 w-4" />
            {state.message}
          </p>
        )}
        <Button className="bg-gray400 text-white" type="submit">
          오류 제보하기
        </Button>
      </form>
    </section>
  );
}

export default ReportForm;
