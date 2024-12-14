import { useEffect, useState } from "react";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`
        );
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        const data: string[] = await response.json();
        setCategories(data);
      } catch (err: any) {
        setError(err.message || "Неизвестная ошибка");
      }
    };

    fetchCategories();
  }, []);

  return { categories, error };
};
