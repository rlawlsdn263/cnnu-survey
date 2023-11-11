import { Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import { DashBoardPage } from "../../pages/_index";

function Main() {
  return (
    <div className={styles.Main}>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/resources" element={<div>리소스</div>} />
      </Routes>
    </div>
  );
}

export default Main;
