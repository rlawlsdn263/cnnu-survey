import { Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import { DashBoardPage, ResourcePage } from "../../pages/_index";

function Main() {
  return (
    <div className={styles.Main}>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/resource" element={<ResourcePage />} />
      </Routes>
    </div>
  );
}

export default Main;
