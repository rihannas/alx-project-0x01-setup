import Header from '@/components/layout/Header';
import UserModal from '@/components/common/UserModal';
import { UserData } from '@/interfaces';
import { useState } from 'react';

interface UsersProps {
  users: UserData[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState<UserData[]>(users);

  const handleAddUser = (newUser: UserData) => {
    setAllUsers([...allUsers, { ...newUser, id: allUsers.length + 1 }]);
  };

  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='p-4'>
        <div className='flex justify-between mb-4'>
          <h1 className='text-2xl font-semibold'>Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className='bg-blue-700 px-4 py-2 rounded-full text-white'
          >
            Add User
          </button>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          {allUsers.map((user) => (
            <div
              key={user.id}
              className='p-4 bg-white rounded-lg shadow hover:shadow-lg transition'
            >
              <h2 className='font-bold text-lg'>{user.name}</h2>
              <p className='text-gray-600'>@{user.username}</p>
              <p className='text-gray-600'>{user.email}</p>
              <p className='text-gray-600'>{user.phone}</p>
              <p className='text-gray-600'>{user.website}</p>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
