import ByPrices from "@/features/prices/ui/ByPrices/ByPrices";
import styles from "./styles.module.css";
import ByCategory from "@/features/category/ui/ByCategory/ByCategory";
import ByRaiting from "@/features/category/ui/ByRaiting/ByRaiting";
import { useState } from "react";

const ProductsFilters = () => {
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);

  // This is ProductFilters
  return (
    <div className={styles.productsFilters}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsFilterVisible((prev) => !prev)}
      >
        {isFilterVisible ? "Filters <-" : "Filters ->"}
      </button>

      {isFilterVisible && (
        <div className={styles.filters}>
          <ByCategory />
          <ByPrices />
          <ByRaiting />
        </div>
      )}
    </div>
  );
};

export default ProductsFilters;
