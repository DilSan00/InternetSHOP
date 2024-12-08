import { useAppDispatch } from "@/app/appStore";
import styles from "./styles.module.css";
import { IProducts } from "@/shared/interfaces";
import { setCart } from "@/entities/products/model/productSlice";

const ProductsCard = ({ image, title, rating, price }: IProducts) => {
  const productList = { image, title, rating, price };
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(setCart(productList));
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
