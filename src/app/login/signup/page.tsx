import React from 'react';
import Logo from '@/components/atoms/Logo';
import SignupForm from '@/components/templates/Login/SignupForm';

function SignUp() {
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
