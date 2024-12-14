import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { removeFromCart } from "@/entities/products/model/productSlice";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.product.products);

  const deleteFromCart = (title: string) => {
    dispatch(removeFromCart(title));
  };

  return { cart, deleteFromCart };
};
