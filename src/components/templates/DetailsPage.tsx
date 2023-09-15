import React from 'react';
import { Products } from '../../../types/types';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@/components/redux/features/storeSlice';

export default function DetailsPage({
  id,
  img,
  title,
  desc,
  price,
  quantity,
}: Products) {
  const state = useSelector((state: any) => state.storeState);
  console.log(state);
  const dispatch = useDispatch();
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
          onClick={() => dispatch(addToCart({ img, title, price, quantity }))}
          className='bg-blue-600 px-4 py-2 rounded-lg shadow-xl my-10'
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
