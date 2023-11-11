import styles from "./Sidebar.module.css";
import { SidebarMenu } from "../../components/_index";

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <SidebarMenu url={""}>대시보드</SidebarMenu>
      <SidebarMenu url={"resource"}>유능한 리소스</SidebarMenu>
    </div>
  );
}

export default Sidebar;
