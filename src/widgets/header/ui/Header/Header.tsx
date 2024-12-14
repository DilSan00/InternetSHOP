import styles from "./styles.module.css";
import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <h2>InternetSHOP</h2>
        <Profile/>
      </header>
    </div>
  );
};

export default Header;
