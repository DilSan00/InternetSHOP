import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useAppDispatch } from "@/app/appStore";
import { filtered } from "../../../../entities/category/model/categorySlice";

const ByCategory = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    const setCategory = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }
      const data: string[] = await response.json();
      setCategories(data);
    };

    setCategory();
  }, []);

  const handleChangeCategory = (category: string) => {
    if (selectedCategories === category) {
      setSelectedCategories("");
      dispatch(filtered(""));
    } else {
      setSelectedCategories(category);
      dispatch(filtered(category));
    }
  };

  return (
    <details className={styles.byCategory}>
      <summary>Category</summary>
      {categories.map((category, index) => (
        <div key={index} className={styles.category}>
          <h3 className={styles.categoryTitle}>
            <input
              type="checkbox"
              checked={selectedCategories === category}
              onChange={() => handleChangeCategory(category)}
            />
            {category}
          </h3>
        </div>
      ))}
    </details>
  );
};

export default ByCategory;
