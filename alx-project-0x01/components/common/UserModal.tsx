import React, { useState } from 'react';
import { UserData, UserModalProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' },
    },
    company: { name: '', catchPhrase: '', bs: '' },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const key = name.split('.')[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (name.startsWith('company.')) {
      const key = name.split('.')[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg p-8 shadow-lg w-full max-w-lg overflow-y-auto max-h-full'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800'>Add New User</h2>
        <form onSubmit={handleSubmit}>
          {/* Basic user fields */}
          <div className='mb-4'>
            <label className='block mb-1 font-medium'>Name</label>
            <input
              type='text'
              name='name'
              value={user.name}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1 font-medium'>Username</label>
            <input
              type='text'
              name='username'
              value={user.username}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1 font-medium'>Email</label>
            <input
              type='email'
              name='email'
              value={user.email}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          {/* Address */}
          <div className='mb-4'>
            <h3 className='font-semibold mb-2'>Address</h3>
            {['street', 'suite', 'city', 'zipcode'].map((field) => (
              <input
                key={field}
                type='text'
                name={`address.${field}`}
                placeholder={field}
                value={(user.address as any)[field]}
                onChange={handleChange}
                className='w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            ))}
          </div>

          {/* Company */}
          <div className='mb-4'>
            <h3 className='font-semibold mb-2'>Company</h3>
            {['name', 'catchPhrase', 'bs'].map((field) => (
              <input
                key={field}
                type='text'
                name={`company.${field}`}
                placeholder={field}
                value={(user.company as any)[field]}
                onChange={handleChange}
                className='w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            ))}
          </div>

          <div className='flex justify-between items-center'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
