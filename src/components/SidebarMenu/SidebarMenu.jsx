import styles from "./SidebarMenu.module.css";

function SidebarMenu({ children }) {
  return (
    <div className={styles.SidebarMenu}>
      <span>{children}</span>
    </div>
  );
}

export default SidebarMenu;
