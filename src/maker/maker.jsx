import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../component/editor/editor";
import Footer from "../component/footer/footer";
import Header from "../component/header/header";
import Preview from "../component/preview/preview";
import styles from "./maker.module.css";
const Maker = ({ authService }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
