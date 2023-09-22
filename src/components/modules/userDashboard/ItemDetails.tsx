import React from 'react';
import { Products } from '../../../../types/types';
import Link from 'next/link';
import Image from 'next/image';
export default function ItemDetails({ id, img, title, price }: Products) {
  return (
    <div
      key={id}
      className={`flex bg-slate-900 my-10 rounded-lg shadow-lg justify-between w-full items-center px-2`}
    >
      <div>
        <Link href={`/products/${id}`}>
          <Image
            className='object-contain  max-h-32 max-w-[120px]  md:max-w-[249px]'
            alt={title}
            width={350}
            height={350}
            src={img}
          />
        </Link>
      </div>
      <div className='text-white capitalize text-lg lg:px-4'>
        <Link className='text-blue-500' href={`/products/${id}`}>
          {title}
        </Link>
        <p>{price}$</p>
      </div>
    </div>
  );
}
