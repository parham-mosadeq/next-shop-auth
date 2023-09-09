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

export type { Products, UserInfo };
