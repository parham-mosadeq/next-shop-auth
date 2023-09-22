import { successToast } from '@/components/shared/Toasts';
import React from 'react';

export default function Banner() {
  successToast('Congrats! you placed your order ;)');

  return (
    <div className='text-center h-screen'>
      <h3 className='my-10 text-xl uppercase tracking-widest'>
        Thanks for shopping from us
      </h3>
    </div>
  );
}
