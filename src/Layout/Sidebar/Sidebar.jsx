import styles from "./Sidebar.module.css";
import { SidebarMenu } from "../../components/_index";

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <SidebarMenu>대쉬보드</SidebarMenu>
      <SidebarMenu>유능한 리소스</SidebarMenu>
    </div>
  );
}

export default Sidebar;
