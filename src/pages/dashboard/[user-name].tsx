import UserDetailsPage from '@/components/templates/UserDetailsPage';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function UserName() {
  // for more validation
  const router = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') router.replace('/');
  }, [status]);

  return (
    <div>
      <UserDetailsPage />
    </div>
  );
}
