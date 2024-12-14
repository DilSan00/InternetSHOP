import { IProducts } from "@/shared/interfaces";

export const fetchProducts = async (): Promise<IProducts[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Ошибка при загрузке данных");
  }
  return response.json();
};