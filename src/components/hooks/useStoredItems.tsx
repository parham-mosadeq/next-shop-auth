import React from 'react';
import { useState, useEffect } from 'react';
import { Products } from '../../../types/types';

export default function useStoredItems() {
  const [items, setItems] = useState<Products[]>();

  useEffect(() => {
    setItems(JSON.parse(`${window.localStorage.getItem('store')}`)?.products);
  }, []);
  return items;
}
