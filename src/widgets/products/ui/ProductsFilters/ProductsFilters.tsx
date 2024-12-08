import ByPrices from "@/features/filters/ui/ByPrices/ByPrices";
import styles from "./styles.module.css";
import ByCategory from "@/features/filters/ui/ByCategory/ByCategory";
import ByRaiting from "@/features/filters/ui/ByRaiting/ByRaiting";
import { useState } from "react";

const ProductsFilters = () => {
  const [onFilter, setOnFilter] = useState<boolean>(false);
  const filterClass = onFilter ? "none" : "";

  return (
    <div className={styles.productsList}>
      <button className={styles.title} onClick={() => setOnFilter(!onFilter)}>
        Filters
      </button>

      <div className={filterClass}>
        <ByCategory />
        <ByPrices />
        <ByRaiting />
      </div>
    </div>
  );
};

export default ProductsFilters;
