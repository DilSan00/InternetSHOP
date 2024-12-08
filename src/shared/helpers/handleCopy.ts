export const useFiltered = (number: number) => {
  const categorieList = ['electronics', "jewelery", "men's clothing", "women's clothing"]
  const thisCategory: string = categorieList[number-1]
  return thisCategory
}

export const handleCopy = (event: React.ClipboardEvent<HTMLDivElement>) => {
  event.preventDefault();
  const selection = window.getSelection()?.toString() || "";
  event.clipboardData.setData("text/plain", selection);
};