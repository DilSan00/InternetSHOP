import { useAppDispatch } from "@/app/appStore";
import { IProducts } from "@/shared/interfaces";
import { setCart } from "./productSlice";

export const useAddToCart = () => {
  const dispatch = useAppDispatch();

  return (product: IProducts) => {
    dispatch(setCart(product));
  };
};
