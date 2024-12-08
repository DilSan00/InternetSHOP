import ProductsList from "@/widgets/products/ui/ProductsList/ProductsList";
import styles from "./styles.module.css";
import ProductsFilters from "@/widgets/products/ui/ProductsFilters/ProductsFilters";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <ProductsFilters />
      <ProductsList />
    </main>
  );
};

export default MainPage;
