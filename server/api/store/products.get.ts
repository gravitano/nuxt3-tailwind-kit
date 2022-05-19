const staticProducts = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

export default defineEventHandler(() => {
  return {
    // products: Array.from({ length: 20 }, (v, k) => ({
    //   name: `Product ${k + 1}`,
    //   description: `Description ${k + 1}`,
    //   prize: 20,
    //   currency: 'USD',
    // })),
    products: staticProducts,
    header: {
      title: 'Store',
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam accusantium, tenetur porro eum amet incidunt nemo, dolore ducimus vitae ipsa corporis obcaecati rem reprehenderit doloremque aliquid, aperiam officiis debitis commodi.`,
    },
  };
});
