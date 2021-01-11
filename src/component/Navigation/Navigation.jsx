import { AppBar, Toolbar } from "@material-ui/core";
import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
class Navigation extends Component {
  render() {
    return (
      <div className={styles["navigation"]}>
        <AppBar className={styles["appbar"]}>
          <Toolbar className={styles["tool"]}>
            <div>
              <Link to="/">
                <img
                  src="https://raw.githubusercontent.com/umeshmore45/Blog-Object/48091915bca60f3ec048af96c9062b9db1b93fc1/img/logo%20header.svg"
                  alt="logo"
                />
              </Link>
            </div>
            <ul className={styles["ul"]}>
              <li className={styles["li"]}>
                <Link className={styles["link"]} to="/">
                  Home
                </Link>
              </li>
              <li className={styles["li"]}>
                <Link className={styles["link"]} to="/aboutus">
                  About
                </Link>
              </li>
              <li className={styles["li"]}> Contact</li>
            </ul>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navigation;
