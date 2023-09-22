interface Products {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
  quantity: number;
}

interface UserInfo {
  name: string;
  email: string;
  password: string;
}

interface StoreInitState {
  products: Array<Products>;
  qyt: number;
  isCheckedOut: boolean;
  totalPrice: number;
}

type UserCartType = {
  status: string;
  msg: string;
};

export type { Products, UserInfo, StoreInitState, UserCartType };
