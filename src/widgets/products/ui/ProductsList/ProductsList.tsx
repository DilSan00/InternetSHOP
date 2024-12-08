import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import ProductsCard from "@/shared/ui/ProductsCard/ProductsCard";
import { IProducts } from "@/shared/interfaces";
import { useAppSelector } from "@/app/appStore";

const ProductsList = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const category = useAppSelector((state) => state.category.category);
  const { minPrice, maxPrice } = useAppSelector((state) => state.category);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        const data: IProducts[] = await response.json();
        // console.log("api data: ", data);
        setProducts(data);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [minPrice, maxPrice]);

  if (isLoading) return <p>Загрузка...</p>;

  const filterMap = products.filter((product) => {
    const isCategoryMatch = category ? product.category === category : true;
    const isPriceMatch = product.price >= minPrice && product.price <= maxPrice;
    return isCategoryMatch && isPriceMatch;
  });

  return (
    <div className={styles.productsList}>
      {filterMap?.map((product) => {
        console.log(product.id)
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