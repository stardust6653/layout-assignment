import React from "react";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <div className={styles.LayoutComponent}>
        <div className={styles.square1}>
          <div className={styles.square1_mini_square1}></div>
          <div className={styles.square1_mini_square2}></div>
          <div className={styles.square1_mini_square2}></div>
        </div>
        <div className={styles.square2}>
          <div className={styles.square2_mini_square1}></div>
          <div className={styles.square2_mini_square2}></div>
        </div>
        <div className={styles.square3}>
          <div className={styles.square3_mini_square1}></div>
        </div>
        <div className={styles.square4}></div>
        <div className={styles.square5}>
          <div className={styles.square5_mini_square1}></div>
          <div className={styles.square5_mini_square2}></div>
        </div>
      </div>
    </>
  );
};

export default Layout;
