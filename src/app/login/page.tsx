import Button from '@/components/atoms/Button/Button';
import LabeledInput from '@/components/molecules/LabeledInput';
import LoginTemplate from '@/components/templates/LoginTemplate';
import React from 'react';

const Login = () => {
  return (
    <LoginTemplate>
      <section className="h-full">
        <div className="h-1/2 flex-col-box gap-6">
          <h1>BABYLON</h1>
          <form className="flex-col-box gap-1">
            <LabeledInput placeholder="이메일" />
            <LabeledInput placeholder="비밀번호" />
          </form>
          <Button className="bg-gray200">로그인</Button>
        </div>
        <div>social</div>
      </section>
    </LoginTemplate>
  );
};

export default Login;
