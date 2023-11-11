import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const navigate = useNavigate();

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderInner}>
        <h1
          className={styles.HeaderLogo}
          onClick={() => {
            navigate("/");
          }}
        >
          산림ESG평가
        </h1>
      </div>
    </div>
  );
}

export default Header;
