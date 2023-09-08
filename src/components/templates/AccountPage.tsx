import Link from 'next/link';
import AccountFrom from '../modules/AccountFrom';

export default function AccountPage() {
  return (
    <article className='text-center h-full flex justify-center flex-col'>
      <AccountFrom btnTxt='Register' />
      <p className='capitalize font-bold'>
        don't have an account ?{' '}
        <Link className='text-blue-700 font-normal' href='/account/signup'>
          sign up here
        </Link>
      </p>
    </article>
  );
}
