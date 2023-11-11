import { useNavigate } from "react-router-dom";
import styles from "./SidebarMenu.module.css";

function SidebarMenu({ url, children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${url}`);
  };

  return (
    <div className={styles.SidebarMenu} onClick={handleClick}>
      <span>{children}</span>
    </div>
  );
}

export default SidebarMenu;
