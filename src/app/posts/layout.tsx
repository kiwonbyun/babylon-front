import Footer from '@/components/templates/Footer';
import Header from '@/components/templates/Header';
import React from 'react';

interface PostsLayoutProps {
  children: React.ReactNode;
}

const PostsLayout = ({ children }: PostsLayoutProps) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default PostsLayout;
