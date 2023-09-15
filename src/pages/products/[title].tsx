import DetailsPage from '@/components/templates/DetailsPage';
import { useRouter } from 'next/router';
import { items } from '@/components/templates/HomePage';
export default function ProductsDetails() {
  const {
    query: { title: id },
  } = useRouter();

  const filteredItem = items.find((i) => i.id === +id!);
  return (
    <div>
      <DetailsPage {...filteredItem!} />
    </div>
  );
}
