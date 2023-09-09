import Link from 'next/link';
import AccountFrom from '../modules/AccountFrom';
import { useRouter } from 'next/router';
import { RootState } from '../redux/app/store';
import { useSelector } from 'react-redux';

export default function SignUpPage() {
  const router = useRouter();
  const { name, email, password } = useSelector(
    (state: RootState) => state.formState
  );

  const handleSubmit = async (e: HTMLFormElement) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, name, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.status === 'success') router.replace('/');
  };

  return (
    <div>
      <AccountFrom btnTxt='SignUp' handleSubmit={handleSubmit} />
      <p className='text-center capitalize font-bold'>
        already have an account ?{' '}
        <Link className='text-blue-700 font-normal' href='/account'>
          login
        </Link>
      </p>
    </div>
  );
}
