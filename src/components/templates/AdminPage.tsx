import { useSession } from 'next-auth/react';
import AdminLoginPage from './AdminLoginPage';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

export default function AdminPage() {
  const { data, status } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);
  const [passCheck, setPassCheck] = useState('');
  const adminLoginPass = 'P@rH@aM_2344';

  const handleValidation = () => {
    if (passCheck.includes(adminLoginPass)) {
      setIsAdmin(true);
    }
  };
  console.log(isAdmin);

  if (status === 'authenticated' || !isAdmin) {
    return (
      <div
        className='flex justify-center items-center my-10
      '
      >
        <button
          onClick={() => signOut()}
          className='w-1/2 mx-auto capitalize font-bold 
        px-4 py-1 bg-red-500 text-white rounded-md'
        >
          log out as normal user
        </button>
        <div className='flex justify-center items-center my-10'>
          <input
            type='text'
            placeholder='enter admin password '
            className='capitalize border-2 border-black'
            value={passCheck}
            onChange={(e) => setPassCheck(e.target.value)}
          />
          <button
            onClick={() => handleValidation()}
            className='bg-green-500 px-2 py-2 rounded-md text-white mx-3'
          >
            check
          </button>
        </div>
      </div>
    );
  } else if (isAdmin) {
    console.log(123);
    return (
      <div>
        <AdminLoginPage />
      </div>
    );
  }
}
