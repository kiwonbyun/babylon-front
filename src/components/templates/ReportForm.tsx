import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import Button from '../atoms/Button/Button';
import SvgIcon from '../atoms/SvgIcon';
import { useCreateErrorReport } from '@/hooks/Common/Mutate/useCreateErrorReport';

interface IFormInput {
  name: string;
  email: string;
  content: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  content: yup.string().required(),
});

function ReportForm({ closeForm }: { closeForm: () => void }) {
  const { register, reset, handleSubmit, formState } = useForm<IFormInput>({
    defaultValues: {
      name: '',
      email: '',
      content: '',
    },
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  const { mutateAsync } = useCreateErrorReport();

  const onSubmit = handleSubmit((data) => {
    mutateAsync({
      name: data.name,
      email: data.email,
      content: data.content,
    }).then(() => {
      closeForm();
    });
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <section className="mt-10 flex-col-box gap-10">
      <h2>오류를 제보해주시면 빠르게 개선하겠습니다~!</h2>
      <form className="flex flex-col gap-4 w-1/3" onSubmit={onSubmit}>
        <Input
          {...register('name')}
          placeholder="이름"
          className={`w-1/2 ${errors.name ? 'border-b-red600' : 'none'} `}
          type="text"
        />
        <Input
          {...register('email')}
          placeholder="이메일"
          className={`w-3/4 ${errors.email ? 'border-b-red600' : 'none'} `}
          type="text"
        />
        <TextArea
          {...register('content')}
          placeholder="오류 내용을 입력해주세요"
        />
        {!!Object.keys(errors).length && (
          <p className="text-red600 text-sm flex items-center gap-1">
            <SvgIcon name="alert" className="stroke-red600 w-5 h-5" />
            내용을 모두 입력해주세요
          </p>
        )}
        <footer className="flex-box gap-5">
          <Button type="submit">제출하기</Button>
        </footer>
      </form>
    </section>
  );
}

export default ReportForm;
