import { useDispatch } from 'react-redux';
import { Products } from '../../../../types/types';
import { useSession } from 'next-auth/react';
import ItemDetails from './ItemDetails';
import useStoredItems from '@/components/hooks/useStoredItems';
import { checkOut } from '@/components/redux/features/storeSlice';
export default function ItemsInCart() {
  const storedItems = useStoredItems();
  const isValid = storedItems?.length > 0;
  const { data: dt } = useSession();
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    const res = await fetch('/api/products/updateCart', {
      method: 'POST',
      body: JSON.stringify({
        products: isValid && storedItems,
        session: dt?.user?.email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    if (data.status === 'success') {
      dispatch(checkOut(null));
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
          storedItems!.map((item: Products) => (
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
