import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Products } from '../../../../types/types';

export default function BoughtProducts() {
  const products = useSelector((state: any) => state.storeState.products);
  const [userList, setUserList] = useState([]);
  const handleFetch = async () => {
    const res = await fetch('/api/products/');
    const data = await res.json();
    setUserList(data);
  };
  useEffect(() => {
    handleFetch();
  }, [products]);
  return (
    <div>
      <h1 className='text-lg capitalize'> recently bought:</h1>
      {userList.length &&
        userList.map((item: Products) => {
          return (
            <div className='capitalize' key={item.id * Math.random()}>
              <div>{item.title}</div>
            </div>
          );
        })}
    </div>
  );
}
