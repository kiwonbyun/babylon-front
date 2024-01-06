import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../atoms/Button/Button';
import { useCreateErrorReport } from '@/hooks/Common/Mutate/useCreateErrorReport';
import { useToast } from '@/hooks/Custom/Toast/ToastProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import LabeledInput from '../molecules/LabeledInput';
import LabeledTextArea from '../molecules/LabeledTextArea';
import {
  ErrorReportFormInputType,
  errorReportSchema,
} from '@/types/formSchema';

interface IReportFromProps {
  closeForm: () => void;
}

function ReportForm({ closeForm }: IReportFromProps) {
  const { register, handleSubmit, formState } =
    useForm<ErrorReportFormInputType>({
      resolver: zodResolver(errorReportSchema),
    });
  const { errors } = formState;
  const { mutateAsync } = useCreateErrorReport();
  const { addToast } = useToast();

  const onSubmit = handleSubmit((data) => {
    console.log(data.name);
    if (!data.name || !data.email || !data.content) return;
    mutateAsync({
      name: data.name,
      email: data.email,
      content: data.content,
    }).then(() => {
      addToast.success(
        <div className="flex-col-box">
          <p>오류 제보가 완료되었습니다!</p>
          <p>빠른 시일 내에 수정하겠습니다.</p>
        </div>
      );
      closeForm();
    });
  });

  return (
    <section className="mt-10 flex-col-box gap-10 mb-20">
      <h2>오류를 제보해주시면 빠르게 개선하겠습니다~!</h2>
      <form className="flex flex-col gap-4 w-1/3" onSubmit={onSubmit}>
        <LabeledInput
          className="w-full"
          error={errors.name?.message}
          label="이름"
          {...register('name')}
        />
        <LabeledInput
          className="w-full"
          error={errors.email?.message}
          label="이메일"
          {...register('email')}
        />
        <LabeledTextArea
          className="w-full h-44"
          desc="오류 내용을 입력해주세요"
          error={errors.content?.message}
          label="오류 내용"
          {...register('content')}
        />

        <footer className="flex-box gap-5">
          <Button type="submit">제출하기</Button>
        </footer>
      </form>
    </section>
  );
}

export default ReportForm;
