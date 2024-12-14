import styles from "./styles.module.css";
import { IProducts } from "@/shared/interfaces";
import { useAddToCart } from "../../model/useAddToCart";

const ProductsCard = ({ image, title, rating, price }: IProducts) => {
  const productList = { image, title, rating, price };
  const addToCart = useAddToCart();

  const handleAddToCart = () => {
    addToCart(productList);
  };

  return (
    <div className={styles.productCard}>
      <img className={styles.productImage} src={image} alt={title} />
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.rating}>
        <p>
          <span>rating: {rating.rate}</span> - review: {rating.count}
        </p>
      </div>
      <div className={styles.priceBlock}>
        <p className={styles.price}>{price} $</p>
        <button onClick={handleAddToCart}>В Корзину</button>
      </div>
    </div>
  );
};

export default ProductsCard;
