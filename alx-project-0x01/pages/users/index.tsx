import React from 'react';
import Header from '@/components/layout/Header';

const Users: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='p-8'>
        <h1 className='text-3xl font-semibold mb-4'>Users</h1>
        <p>List of users will appear here...</p>
      </main>
    </div>
  );
};

export default Users;
