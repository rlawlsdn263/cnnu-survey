import { useNavigate } from "react-router-dom";
import styles from "./SidebarMenu.module.css";

function SidebarMenu({ url, setActiveMenu, style, children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setActiveMenu(url);
    navigate(`/${url}`);
  };

  return (
    <div className={styles.SidebarMenu} onClick={handleClick} style={style}>
      <span>{children}</span>
    </div>
  );
}

export default SidebarMenu;
