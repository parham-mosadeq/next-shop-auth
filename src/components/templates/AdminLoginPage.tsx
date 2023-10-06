import { signIn } from 'next-auth/react';
import { useState } from 'react';

type Admin = {
  email: string;
  password: string;
  prev?: () => {};
};

export default function AdminLoginPage() {
  const [admin, setAdmin] = useState<Admin>();
  const handleLogIn = async () => {
    const res = await signIn('credentials', {
      name: 'admin',
      redirect: false,
    });
  };

  console.log(admin);

  return (
    <section className='h-80 flex justify-center items-center flex-col'>
      <form className='flex justify-center items-center flex-col'>
        <input
          required={true}
          className='border-blue-500 border-2 my-2 rounded-md px-2 py1 '
          type='email'
          placeholder='email'
          value={admin?.email}
        />
        <input
          required={true}
          className='border-blue-500 border-2 my-2 rounded-md px-2 py1 '
          type='password'
          placeholder='password'
        />
        <button
          onClick={handleLogIn}
          type='submit'
          className='bg-blue-700 px-3 py-1 rounded-md text-white capitalize font-bold active:scale-105'
        >
          log in as admin{' '}
        </button>
      </form>
    </section>
  );
}
