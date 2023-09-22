import BoughtProducts from '../modules/userDashboard/BoughtProducts';
import ItemsInCart from '../modules/userDashboard/ItemsInCart';

export default function UserDetailsPage() {
  return (
    <div className=''>
      {/* showing recent products in users shopping cart */}
      <ItemsInCart />
      {/* showing recent products in users shopping cart */}

      {/* showing users recent purchased from data base*/}
      <BoughtProducts />
      {/* showing users recent purchased from data base*/}
    </div>
  );
}
