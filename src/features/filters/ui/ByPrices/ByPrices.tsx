import { useAppDispatch } from "@/app/appStore";
import { useState } from "react";
import {
  setMax,
  setMin,
} from "../../../../entities/category/model/categorySlice";

const ByPrices = () => {
  const dispatch = useAppDispatch();
  const [minInput, setMinInput] = useState<number>(0);
  const [maxInput, setMaxInput] = useState<number>(200);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setMinInput(value);
    dispatch(setMin(value));
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setMaxInput(value);
    dispatch(setMax(value));
  };

  return (
    <details>
      <summary>Prices</summary>
      <div>
        <input type="number" value={minInput} onChange={handleMinChange} />
        <input type="number" value={maxInput} onChange={handleMaxChange} />
      </div>
    </details>
  );
};

export default ByPrices;
