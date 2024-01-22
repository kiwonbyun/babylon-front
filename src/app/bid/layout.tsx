import React from 'react';
import Header from '@/components/templates/Header';
import { loginCheck } from '@/lib/serverActions';
import ToastRedirecter from '@/components/atoms/ToastRedirecter';
import Footer from '@/components/templates/Footer';

interface BidLayoutProps {
  children: React.ReactNode;
}

const BidLayout = async ({ children }: BidLayoutProps) => {
  const user = await loginCheck();
  if (!user) {
    return (
      <ToastRedirecter
        message={'로그인이 필요합니다'}
        type="error"
        redirectPath="/login"
      />
    );
  }
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default BidLayout;
