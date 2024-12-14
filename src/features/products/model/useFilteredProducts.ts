interface Props {
  category: string;
  minPrice: number;
  maxPrice: number;
}

export const useFilteredProducts = (
  products: any[],
  { category, minPrice, maxPrice }: Props
) => {
  return products.filter((product: { category: any; price: number }) => {
    const isCategoryMatch = category ? product.category === category : true;
    const isPriceMatch = product.price >= minPrice && product.price <= maxPrice;
    return isCategoryMatch && isPriceMatch;
  });
};
