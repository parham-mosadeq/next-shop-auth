import { useSelector } from 'react-redux';
import { Products } from '../../../../types/types';
import Image from 'next/image';
import Link from 'next/link';
export default function ItemsInCart() {
  // id,img/title,price
  const products = useSelector((state: any) => state.storeState.products);
  const isValid = products.length > 0;
  return (
    <div className='flex justify-center items-center flex-col mx-auto'>
      <h1 className='self-start capitalize text-2xl my-10 mx-3'>
        current items in cart:
      </h1>
      <div className='w-full'>
        {isValid ? (
          products.map((item: Products) => {
            return (
              <>
                <div
                  key={item.id}
                  className='flex bg-gray-900 my-10 rounded-lg shadow-lg justify-between w-full items-center px-2'
                >
                  <div>
                    <Link href={`/products/${item.id}`}>
                      <Image
                        className='object-contain  max-h-32 max-w-[120px]  md:max-w-[249px]'
                        alt={item.title}
                        width={350}
                        height={350}
                        src={item.img}
                      />
                    </Link>
                  </div>
                  <div className='text-white capitalize text-lg lg:px-4'>
                    <Link
                      className='text-blue-500'
                      href={`/products/${item.id}`}
                    >
                      {item.title}
                    </Link>
                    <p>{item.price}$</p>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <>
            <p className='text-center text-xl uppercase font-light tracking-widest'>
              nothing to show
            </p>
          </>
        )}
      </div>
      <button
        className='text-center my-5 px-4 py-2 rounded-md text-white bg-blue-600'
        disabled={isValid ? false : true}
      >
        {isValid ? <Link href='/checkout'>check out</Link> : ''}
      </button>
    </div>
  );
}