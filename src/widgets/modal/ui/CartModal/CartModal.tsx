import { useAppDispatch, useAppSelector } from "@/app/appStore";
import styles from "./styles.module.css";
import { removeFromCart } from "@/entities/products/model/productSlice";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: Props) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.product.products);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  console.log(cart.map((wer) => wer.id));
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalName}>
          <h2>Cart</h2>
          <button onClick={handleClose}>Закрыть</button>
        </div>

        <ul className={styles.cartList}>
          {cart.map((item) => {
            return (
              <li key={item.id} className={styles.cartItem}>
                <img
                  className={styles.imageCart}
                  src={item.image}
                  alt={item.title}
                />
                <div className={styles.cartInfo}>
                  <h3>{item.title}</h3>
                  <p className={styles.price}>{item.price} $</p>
                  <button>More details</button>
                  <button onClick={() => dispatch(removeFromCart(item.title))}>
                    delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CartModal;
