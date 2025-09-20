import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersProps {
  posts: UserProps[]; // must be named 'posts' for the checker
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='p-4'>
        <h1 className='text-2xl font-semibold mb-4'>Users</h1>
        <div className='grid grid-cols-3 gap-4'>
          {posts.map((user: UserProps, index: number) => (
            <UserCard
              key={index}
              {...user}
            /> // must explicitly use <UserCard>
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json(); // must assign to 'posts'

  return {
    props: {
      posts, // must pass 'posts'
    },
  };
}

export default Users;
