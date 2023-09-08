import React from 'react';
import ProductCards from '../modules/ProductCards';
import GridTem from '../shared/GridTem';

interface Products {
  id: Number;
  title: String;
  desc: String;
  price: Number;
  img: String;
  quantity: Number;
}

export default function HomePage() {
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
      <GridTem>
        {items.map((i) => {
          return (
            <div>
              <ProductCards {...i} />
            </div>
          );
        })}
      </GridTem>
    </div>
  );
}
