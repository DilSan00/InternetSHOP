import { usePriceFilter } from "../../model/usePriceFilter";

const ByPrices = () => {
  const { minInput, maxInput, handleMinChange, handleMaxChange } =
    usePriceFilter();

  return (
    <details>
      <summary>Prices</summary>
      <div>
        <input
          type="number"
          value={minInput}
          onChange={(e) => handleMinChange(Number(e.target.value))}
        />
        <input
          type="number"
          value={maxInput}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
        />
      </div>
    </details>
  );
};

export default ByPrices;
