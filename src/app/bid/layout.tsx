import React from 'react';
import Header from '@/components/templates/Header';
// import Footer from '@/components/templates/Footer';

interface BidLayoutProps {
  children: React.ReactNode;
}

const BidLayout = ({ children }: BidLayoutProps) => {
  return (
    <main>
      <Header />
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default BidLayout;
