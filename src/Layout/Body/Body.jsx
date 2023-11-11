import styles from "./Body.module.css";
import { default as Main } from "../Main/Main";
import { default as Sidebar } from "../Sidebar/Sidebar";

function Body() {
  return (
    <div className={styles.Body}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default Body;
