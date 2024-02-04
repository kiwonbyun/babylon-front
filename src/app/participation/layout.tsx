import Footer from '@/components/templates/Footer';
import Header from '@/components/templates/Header';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Participation',
};
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
