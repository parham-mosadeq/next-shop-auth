import Link from 'next/link';
import AccountFrom from '../modules/AccountFrom';
import { signIn } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/app/store';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function AccountPage() {
  const { data, status } = useSession();
  const router = useRouter();
  const { email, name, password } = useSelector(
    (state: RootState) => state.formState
  );
  const handleSubmit = async (e: HTMLFormElement) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      name,
      email,
      password,
      redirect: false,
    });
  };

  useEffect(() => {
    if (status === 'authenticated') router.replace('/');
  }, [status]);

  return (
    <article className='text-center h-full flex justify-center flex-col'>
      <AccountFrom btnTxt='Login' handleSubmit={handleSubmit} />
      <p className='capitalize font-bold'>
        don't have an account ?{' '}
        <Link className='text-blue-700 font-normal' href='/account/signup'>
          sign up here
        </Link>
      </p>
    </article>
  );
}
