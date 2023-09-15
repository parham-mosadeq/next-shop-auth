import React, { useEffect } from 'react';

export default function Products() {
  useEffect(() => {
    window.location.replace('/');
  }, []);
  return (
    <div>
      <h1 className='text-center'>nothing to see here;)</h1>
    </div>
  );
}
