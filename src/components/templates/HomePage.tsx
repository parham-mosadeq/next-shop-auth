import React from 'react';
import ProductCards from '../modules/ProductCards';
import GridTem from '../shared/GridTem';
import { Products } from '../../../types/types';

export default function HomePage() {
  // ! mock api
  const items: Array<Products> = [
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
      title: 'iphone 14 pro max',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur culpa, soluta accusamus illo tenetur vitae sequi fuga suscipit incidunt repellendus dicta delectus quae officiis quo voluptatum aut dolor? Exercitationem?`,
      price: 1300,
      img: '/iphone.webp',
      quantity: 10,
    },
    {
      id: 3,
      title: 'iphone 14 pro max',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur culpa, soluta accusamus illo tenetur vitae sequi fuga suscipit incidunt repellendus dicta delectus quae officiis quo voluptatum aut dolor? Exercitationem?`,
      price: 1300,
      img: '/iphone.webp',
      quantity: 10,
    },
    {
      id: 4,
      title: 'iphone 14 pro max',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur culpa, soluta accusamus illo tenetur vitae sequi fuga suscipit incidunt repellendus dicta delectus quae officiis quo voluptatum aut dolor? Exercitationem?`,
      price: 1300,
      img: '/iphone.webp',
      quantity: 10,
    },
    {
      id: 5,
      title: 'iphone 14 pro max',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, aspernatur culpa, soluta accusamus illo tenetur vitae sequi fuga suscipit incidunt repellendus dicta delectus quae officiis quo voluptatum aut dolor? Exercitationem?`,
      price: 1300,
      img: '/iphone.webp',
      quantity: 10,
    },
  ];
  return (
    <div>
      {/* using GridTem component to make UI responsive */}
      <GridTem>
        {items.map((i) => {
          return (
            <section>
              <ProductCards {...i} />
            </section>
          );
        })}
      </GridTem>
    </div>
  );
}
