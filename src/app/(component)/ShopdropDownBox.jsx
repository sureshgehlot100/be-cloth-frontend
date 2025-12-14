import Link from 'next/link';
import React from 'react';

const products = [
  {
    category: 'ACCESSORY',
    items: [
      { name: 'All', url: '/shop' },
      { name: 'Bags', url: '/shop/accessory/bags' },
      { name: 'Belts', url: '/shop/accessory/belts' },
      { name: 'Hats & cap', url: '/shop/accessory/hats-cap' },
      { name: 'Rucksacs', url: '/shop/accessory/rucksacs' },
    ],
  },
  {
    category: 'CLOTHING',
    items: [
      { name: 'Hoodies', url: '/shop/clothing/hoodies' },
      { name: 'Jackets', url: '/shop/clothing/jackets' },
      { name: 'Jeans', url: '/shop/clothing/jeans' },
      { name: 'T-shirts', url: '/shop/clothing/t-shirts' },
      { name: 'Trousers', url: '/shop/clothing/trousers' },
    ],
  },
  {
    category: 'SHOES',
    items: [
      { name: 'Moccasins', url: '/shop/shoes/moccasins' },
      { name: 'Business Shoes', url: '/shop/shoes/business-shoes' },
      { name: 'Outdoor Shoes', url: '/shop/shoes/outdoor-shoes' },
      { name: 'Sandals', url: '/shop/shoes/sandals' },
      { name: 'Trainers', url: '/shop/shoes/trainers' },
    ],
  },
];

function ShopdropDownBox() {
  return (
    <div className="absolute top-full left-0 w-[83.7%] bg-[#292828] shadow-md p-4 md:mt-2 xl:mt-3 hidden group-hover:block">
      <div className='flex justify-around items-center'>
        {products.map((category) => (
          <div key={category.category} className="text-white ">
              <h4 className="text-lg font-[400] mb-2">{category.category}</h4>
              <ul>
                {category.items.map((item) => (
                  <li key={item.name} className="mb-2">
                    <Link href={item.url} className="text-[#91B0C7] hover:text-gray-200">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ShopdropDownBox;