import Footer from '@/components/templates/Footer';
import Header from '@/components/templates/Header';
import React from 'react';

interface ParticipationLayoutProps {
  children: React.ReactNode;
}

const ParticipationLayout = ({ children }: ParticipationLayoutProps) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default ParticipationLayout;
