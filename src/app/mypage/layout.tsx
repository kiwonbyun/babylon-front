import ToastRedirecter from '@/components/atoms/ToastRedirecter';
import Footer from '@/components/templates/Footer';
import Header from '@/components/templates/Header';
import { loginCheck } from '@/lib/serverActions';
import { EnumTheme } from '@/types/commonInterface';
import React from 'react';

interface MypageLayoutProps {
  children: React.ReactNode;
}

const MypageLayout = async ({ children }: MypageLayoutProps) => {
  const user = await loginCheck();

  if (!user) {
    return (
      <ToastRedirecter
        message="로그인이 필요합니다"
        type="error"
        redirectPath="/"
      />
    );
  }

  return (
    <main>
      <Header theme={EnumTheme.BLACK} />
      {children}
      <Footer />
    </main>
  );
};

export default MypageLayout;
