import { useState } from "react";
import styles from "./Sidebar.module.css";
import { SidebarMenu } from "../../components/_index";

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <div className={styles.Sidebar}>
      <SidebarMenu
        url={""}
        setActiveMenu={setActiveMenu}
        style={activeMenu === "" ? { color: "green" } : { color: "white" }}
      >
        대시보드
      </SidebarMenu>
      <SidebarMenu
        url={"resource"}
        setActiveMenu={setActiveMenu}
        style={
          activeMenu === "resource" ? { color: "green" } : { color: "white" }
        }
      >
        유능한 리소스
      </SidebarMenu>
    </div>
  );
}

export default Sidebar;
