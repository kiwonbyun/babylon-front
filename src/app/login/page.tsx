import Button from '@/components/atoms/Button/Button';
import Divider from '@/components/atoms/Divider';
import Logo from '@/components/atoms/Logo';
import LabeledInput from '@/components/molecules/LabeledInput';
import LoginTemplate from '@/components/templates/LoginTemplate';
import classNames from 'classnames';
import React from 'react';

const Login = () => {
  return (
    <LoginTemplate>
      <section className={classNames('h-full')}>
        <div className="h-1/2 flex-col-box gap-6">
          <Logo />
          <form className="flex-col-box gap-2">
            <LabeledInput className="w-64" label="이메일" id="email" />
            <LabeledInput className="w-64" label="비밀번호" id="password" />
          </form>
          <div className="flex-col-box gap-2">
            <Button
              className="bg-green400 text-white w-64 disabled:bg-gray200"
              disabled
            >
              로그인
            </Button>
            <Button className="bg-green200 w-64">회원가입</Button>
          </div>
        </div>
        <Divider className="mx-4">or</Divider>
        <div>social</div>
      </section>
    </LoginTemplate>
  );
};

export default Login;
