import { useState } from "react";
import styles from "./styles.module.css";
import { useAppDispatch } from "@/app/appStore";
import { filtered } from "../../../../entities/category/model/categorySlice";
import { useFetchCategories } from "../../model/useFetchCategories";

const ByCategory = () => {
  const { categories, error } = useFetchCategories();
  const [selectedCategories, setSelectedCategories] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleChangeCategory = (category: string) => {
    if (selectedCategories === category) {
      setSelectedCategories("");
      dispatch(filtered(""));
    } else {
      setSelectedCategories(category);
      dispatch(filtered(category));
    }
  };

  if (error) return <p>Ошибка: {error}</p>;

  return (
    <details className={styles.byCategory}>
      <summary>Category</summary>
      <form action="">
        {categories.map((category, index) => (
          <div key={index} className={styles.category6}>
            <input
              type="checkbox"
              checked={selectedCategories === category}
              onChange={() => handleChangeCategory(category)}
            />
            <label htmlFor="category"> {category}</label>
          </div>
        ))}
      </form>
    </details>
  );
};

export default ByCategory;
