import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
export default function UserStatus() {
  const { data, status } = useSession();
  console.log(data);
  const isUser = status === 'authenticated';
  return (
    <div className='flex flex-col justify-center items-center'>
      <Link
        className='text-blue-600 font-bold text-lg'
        href={isUser ? `/dashboard/${data?.user?.email}` : '/account'}
      >
        {status === 'authenticated' ? (
          <>
            <span>{data.user?.email}</span>
          </>
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
