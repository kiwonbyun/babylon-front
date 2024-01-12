import Footer from '@/components/templates/Footer';
import Header from '@/components/templates/Header';
import React from 'react';

interface BidLayoutProps {
  children: React.ReactNode;
}

const BidLayout = ({ children }: BidLayoutProps) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default BidLayout;
