import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
 
import useStoredItems from '../hooks/useStoredItems';
export default function UserStatus() {
  const { data, status } = useSession();
  const isUser = status === 'authenticated';
  const storedItems= useStoredItems()
 

  return (
    <div className='flex flex-col justify-center items-center'>
      <Link
        className='text-blue-600 font-bold text-lg'
        href={isUser ? `/dashboard/${data?.user?.email}` : '/account'}
      >
        {status === 'authenticated' ? (
          <div className='flex items-center w-full'>
            <h3>{data.user?.email}</h3>
            <h5 className=' mx-5  rounded-full text-blue-300  text-center'>
              cart: {storedItems?.length}
            </h5>
          </div>
        ) : (
          'Guest User/login'
        )}
      </Link>
      {isUser && (
        <button
          onClick={() => signOut()}
          className='bg-red-600 capitalize mt-2 px-4 py-1 text-white rounded-sm'
        >
          sign out
        </button>
      )}
    </div>
  );
}
