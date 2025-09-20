import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';

const Posts: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='p-8 flex flex-col gap-4'>
        <h1 className='text-3xl font-semibold mb-4'>Posts</h1>
        <PostCard />
        <PostCard />
      </main>
    </div>
  );
};

export default Posts;
