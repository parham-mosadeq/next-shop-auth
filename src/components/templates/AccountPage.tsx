import Link from 'next/link';
import AccountFrom from '../modules/AccountFrom';

export default function AccountPage() {

  // ! make it conditional => if the user is signed in show **dashboard** 
  // !  if not show log in form
  return (
    <article className='text-center h-full flex justify-center flex-col'>
      <AccountFrom btnTxt='Login' handleSubmit={() => {}} />
      <p className='capitalize font-bold'>
        don't have an account ?{' '}
        <Link className='text-blue-700 font-normal' href='/account/signup'>
          sign up here
        </Link>
      </p>
    </article>
  );
}
