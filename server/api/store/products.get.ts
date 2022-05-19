export default defineEventHandler(({ res }) => {
  return {
    products: Array.from({ length: 20 }, (v, k) => ({
      name: `Product ${k + 1}`,
      description: `Description ${k + 1}`,
      prize: 20,
      currency: 'USD',
    })),
  };
});
