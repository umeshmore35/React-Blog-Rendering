import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
const NotFound = (props) => {
  return (
    <div className={styles["not-found"]}>
      <Link to="/">
        <button className={styles["button"]}>Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
