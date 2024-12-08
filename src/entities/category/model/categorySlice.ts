import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  category: string;
  minPrice: number;
  maxPrice: number;
}

const initialState: CategoryState = {
  category: "",
  minPrice: 0,
  maxPrice: 99999,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    filtered: (state: CategoryState, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setMin: (state: CategoryState, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMax: (state: CategoryState, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    }
  },
});

export const { filtered, setMin, setMax } = categorySlice.actions;
export default categorySlice.reducer;
