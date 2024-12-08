import styles from "./styles.module.css";
import shopCard from "@/shared/assets/free-icon-font-shopping-cart-3916627.png";
import CartModal from "@/widgets/modal/ui/CartModal/CartModal";
import { useState } from "react";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // Состояние для открытия/закрытия модалки

  const handleCartToggle = () => {
    setIsCartOpen((prev) => !prev); // Переключаем состояние модалки
  };
  return (
    <div className="container">
      <header className={styles.header}>
        <h2>InternetSHOP</h2>
        <div className={styles.profile}>
          <img src={shopCard} alt="shopCard" onClick={handleCartToggle} />
          <CartModal isOpen={isCartOpen} onClose={handleCartToggle} />
          <button>Войти</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
