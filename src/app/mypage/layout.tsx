import Footer from '@/components/templates/Footer';
import Header from '@/components/templates/Header';
import { loginCheck } from '@/lib/serverActions';
import { EnumTheme } from '@/types/commonInterface';
import { redirect } from 'next/navigation';
import React from 'react';

interface MypageLayoutProps {
  children: React.ReactNode;
}

const MypageLayout = async ({ children }: MypageLayoutProps) => {
  const user = await loginCheck();

  if (!user) {
    redirect('/');
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
