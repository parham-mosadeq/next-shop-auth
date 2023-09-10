import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Products } from '../../../types/types';

export default function ProductCards({
  title,
  img,
  desc,
  price,
  quantity,
}: Products) {
  return (
    <article
      className='flex flex-col justify-center items-center max-w-md p-3 shadow-lg my-4 rounded-md
             md:p-5 lg:max-w-lg mx-auto '
    >
      <div className='w-full'>
        <Image
          className='block object-cover h-auto w-auto mx-auto max-h-40'
          alt={title}
          src={img}
          width={100}
          height={100}
        />
        <h3 className='text-xl capitalize font-bold tracking-wide text-blue-900'>
          <Link href={`/product/${title}`}>{title}</Link>
        </h3>
      </div>
      <div className='text-stone-400 text-justify capitalize'>
        <p>{desc}</p>
        <div className='font-bold'>
          <p> price: {price.toLocaleString('en')}$</p>
          <p>quantity: {quantity}</p>
        </div>
      </div>
      <Link href={`/product/${title}`} className='capitalize text-blue-800'>
        read more
      </Link>
    </article>
  );
}
