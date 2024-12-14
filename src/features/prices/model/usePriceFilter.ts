import { useAppDispatch } from "@/app/appStore";
import { setMax, setMin } from "@/entities/category/model/categorySlice";
import { useState } from "react";

export const usePriceFilter = () => {
  const dispatch = useAppDispatch();
  const [minInput, setMinInput] = useState<number>(0);
  const [maxInput, setMaxInput] = useState<number>(200);

  const handleMinChange = (value: number) => {
    setMinInput(value);
    dispatch(setMin(value));
  };

  const handleMaxChange = (value: number) => {
    setMaxInput(value);
    dispatch(setMax(value));
  };

  return { minInput, maxInput, handleMinChange, handleMaxChange };
};