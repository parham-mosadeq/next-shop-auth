import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Products } from '../../../types/types';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
} from '@/components/redux/features/storeSlice';
import { useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import { successToast, warnToast } from '../shared/Toasts';
import { useRouter } from 'next/router';
import { isInCard } from '../../../utils/funcs';

export default function DetailsPage({
  id,
  img,
  title,
  desc,
  price,
  quantity,
}: Products) {
  const {
    query: { pid },
  } = useRouter();
  const state = useSelector((state: any) => state.storeState);
  const dispatch = useDispatch();
  const { status } = useSession();
  const handleSubmit = () => {
    if (status === 'unauthenticated') {
      warnToast('Login or Sign up');
      return;
    }
    successToast('Added To Cart');
    dispatch(addToCart({ id, img, title, price, quantity }));
  };

  const handleDelete = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div
      key={id}
      className='min-h-screen max-w-4xl mx-auto mt-10 grid place-items-center md:grid-cols-2'
    >
      <div>
        <Image
          className='w-auto h-auto'
          src={img}
          width={500}
          height={500}
          alt={title}
        />
      </div>
      <div className='flex flex-col px-4 capitalize'>
        <h1 className='text-2xl py-3 font-bold tracking-wider'>{title}</h1>
        <p className='text-justify p-4'>{desc}</p>
        <div className='font-semibold'>
          <h3>price:${price}</h3>
          <h4>in stock:{quantity}</h4>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleSubmit()}
          className='bg-blue-600 px-4 text-white capitalize py-2 mx-2 rounded-lg shadow-xl my-10'
        >
          add to cart
        </button>
        <button
          disabled={!isInCard(id, state.products)}
          onClick={() => handleDelete(id)}
          className={`${
            !isInCard(id, state.products) ? 'bg-gray-300' : 'bg-red-600'
          } text-white capitalize px-4 mx-2 py-2 rounded-lg shadow-xl my-10`}
        >
          remove
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
