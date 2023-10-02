import { useSelector } from 'react-redux';
import { Products } from '../../../../types/types';
import { useSession } from 'next-auth/react';
import ItemDetails from './ItemDetails';

export default function ItemsInCart() {
  const products = useSelector((state: any) => state.storeState.products);
  const isValid = products.length > 0;
  const { data: dt } = useSession();

  const handleCheckout = async () => {
    const res = await fetch('/api/products/updateCart', {
      method: 'POST',
      body: JSON.stringify({
        products: isValid && products,
        session: dt?.user?.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.status === 'success') {
      window.location.replace('/cart/banner');
    }
  };
  return (
    <div className='flex justify-center items-center flex-col mx-auto'>
      <h1 className='self-start capitalize text-2xl my-10 mx-3'>
        current items in cart:
      </h1>
      <div className='w-full'>
        {isValid ? (
          products.map((item: Products) => (
            <div key={item.id}>
              <ItemDetails {...item} />
            </div>
          ))
        ) : (
          <>
            <p className='text-center text-xl uppercase font-light tracking-widest'>
              nothing to show
            </p>
          </>
        )}
      </div>
      <button
        className='text-center my-5 px-4 py-2 capitalize rounded-md text-white bg-blue-600'
        onClick={handleCheckout}
        disabled={isValid ? false : true}
      >
        check out
      </button>
    </div>
  );
}
