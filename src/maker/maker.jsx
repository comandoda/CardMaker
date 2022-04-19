import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../component/editor/editor";
import Footer from "../component/footer/footer";
import Header from "../component/header/header";
import Preview from "../component/preview/preview";
import styles from "./maker.module.css";
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "lee",
      company: "lg",
      theme: "dark",
      title: "software",
      email: "lsj887",
      message: "go for it",
      fileName: "ellie",
      fileUrl: null,
    },
    {
      id: "2",
      name: "lee",
      company: "lg",
      theme: "light",
      title: "software",
      email: "lsj887",
      message: "go for it",
      fileName: "ellie",
      fileUrl: "ellie.png",
    },
    {
      id: "3",
      name: "lee",
      company: "lg",
      theme: "colorful",
      title: "software",
      email: "lsj887",
      message: "go for it",
      fileName: "ellie",
      fileUrl: null,
    },
  ]);
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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
