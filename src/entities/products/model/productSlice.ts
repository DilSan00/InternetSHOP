import { IProducts } from "@/shared/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  products: IProducts[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<IProducts>) => {
      state.products.push(action.payload);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.title !== action.payload
      );
    },

    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { setCart, removeFromCart, clearCart } = productSlice.actions;
export default productSlice.reducer;
