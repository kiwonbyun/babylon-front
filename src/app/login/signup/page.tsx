import React from 'react';
import { redirect } from 'next/navigation';
import Logo from '@/components/atoms/Logo';
import { loginCheck } from '@/utils/serverActions';
import SignupForm from '@/components/templates/SignupForm';

async function SignUp() {
  const loginUser = await loginCheck();

  if (loginUser) {
    redirect('/');
  }
  return (
    <section className="h-full">
      <div className="flex-col-box gap-6 h-full relative bottom-20">
        <Logo />
        <SignupForm />
      </div>
    </section>
  );
}

export default SignUp;
