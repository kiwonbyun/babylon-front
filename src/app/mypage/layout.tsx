import Footer from '@/components/templates/Footer';
import Header from '@/components/templates/Header';
import React from 'react';

interface MypageLayoutProps {
  children: React.ReactNode;
}

const MypageLayout = ({ children }: MypageLayoutProps) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MypageLayout;
