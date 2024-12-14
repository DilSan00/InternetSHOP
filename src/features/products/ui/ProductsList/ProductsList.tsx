import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import ProductsCard from "@/entities/products/ui/ProductsCard/ProductsCard";
import { IProducts } from "@/shared/interfaces";
import { useAppSelector } from "@/app/appStore";
import { fetchProducts } from "../../api/fetchProducts";
import { useFilteredProducts } from "../../model/useFilteredProducts";

const ProductsList = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const category = useAppSelector((state) => state.category.category);
  const { minPrice, maxPrice } = useAppSelector((state) => state.category);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setIsLoading(false);
    };

    loadProducts();
  }, [minPrice, maxPrice]);

  const filteredProducts = useFilteredProducts(products, {
    category,
    minPrice,
    maxPrice,
  });

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div className={styles.productsList}>
      {filteredProducts?.map((product) => {
        console.log(product.id);
        return (
          <ProductsCard
            key={product.id}
            image={product.image}
            title={product.title}
            rating={product.rating}
            price={product.price}
            id={product.id}
            description={product.description}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
