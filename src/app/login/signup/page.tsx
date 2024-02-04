import React from 'react';
import Logo from '@/components/atoms/Logo';
import SignupForm from '@/components/templates/Login/SignupForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
};

function SignUp() {
  return (
    <section className="h-full sm:mt-20">
      <div className="flex-col-box gap-6 h-full relative bottom-20">
        <Logo />
        <SignupForm />
      </div>
    </section>
  );
}

export default SignUp;
