import React, { memo } from "react";
import styles from "./footer.module.css";
const Footer = memo((props) => {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.title}>Don't give up</h4>
    </footer>
  );
});

export default Footer;
