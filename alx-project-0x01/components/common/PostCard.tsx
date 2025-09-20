import React from 'react';

const PostCard: React.FC = () => {
  return (
    <div className='border p-4 rounded-md shadow-sm'>
      <h2 className='font-semibold text-lg'>Post Title</h2>
      <p className='text-gray-600 mt-2'>Post description goes here...</p>
    </div>
  );
};

export default PostCard;
