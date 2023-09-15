import React from 'react';
import ProductCards from '../modules/ProductCards';
import GridTem from '../shared/GridTem';
import { Products } from '../../../types/types';

// ! mock api
export const items: Array<Products> = [
  {
    id: 1,
    title: 'iphone 14 pro max',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur culpa, soluta accusamus illo tenetur vitae sequi fuga suscipit incidunt repellendus dicta delectus quae officiis quo voluptatum aut dolor? Exercitationem?`,
    price: 1300,
    img: '/iphone.webp',
    quantity: 10,
  },
  {
    id: 2,
    title: 'iphone 13 pro max',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur culpa, soluta accusamus illo tenetur vitae sequi fuga suscipit incidunt repellendus dicta delectus quae officiis quo voluptatum aut dolor? Exercitationem?`,
    price: 1300,
    img: '/iphone.webp',
    quantity: 10,
  },
  {
    id: 3,
    title: 'iphone 12 pro max',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur culpa, soluta accusamus illo tenetur vitae sequi fuga suscipit incidunt repellendus dicta delectus quae officiis quo voluptatum aut dolor? Exercitationem?`,
    price: 1300,
    img: '/iphone.webp',
    quantity: 10,
  },
  {
    id: 4,
    title: 'iphone 11 pro max',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur culpa, soluta accusamus illo tenetur vitae sequi fuga suscipit incidunt repellendus dicta delectus quae officiis quo voluptatum aut dolor? Exercitationem?`,
    price: 1300,
    img: '/iphone.webp',
    quantity: 10,
  },
  {
    id: 5,
    title: 'iphone 10 pro max',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur culpa, soluta accusamus illo tenetur vitae sequi fuga suscipit incidunt repellendus dicta delectus quae officiis quo voluptatum aut dolor? Exercitationem?`,
    price: 1300,
    img: '/iphone.webp',
    quantity: 10,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* using GridTem component to make UI responsive */}
      <GridTem>
        {items.map((i) => {
          return (
            <section key={i.id}>
              <ProductCards {...i} />
            </section>
          );
        })}
      </GridTem>
    </div>
  );
}
