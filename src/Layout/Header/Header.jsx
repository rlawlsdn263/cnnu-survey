import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderInner}>
        <h1 className={styles.HeaderLogo}>산림ESG평가</h1>
      </div>
    </div>
  );
}

export default Header;
