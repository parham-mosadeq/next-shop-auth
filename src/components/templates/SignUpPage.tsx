import React from 'react';
import AccountFrom from '../modules/AccountFrom';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div>
      <AccountFrom btnTxt='SignUp' />
      <p className='text-center capitalize font-bold'>
        already have an account ?{' '}
        <Link className='text-blue-700 font-normal' href='/account'>
          login
        </Link>
      </p>
    </div>
  );
}
