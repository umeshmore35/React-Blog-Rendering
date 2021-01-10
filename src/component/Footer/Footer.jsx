import { GitHub, Twitter } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles["footer"]}>
      <FacebookIcon className={styles["icon1"]} />
      <GitHub className={styles["icon2"]} />
      <Twitter className={styles["icon3"]} />
      <p>Copyright 2020. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
