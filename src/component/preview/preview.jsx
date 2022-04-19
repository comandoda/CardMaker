import React from "react";
import Cards from "../cards/cards";
import styles from "./preview.module.css";
const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.cards}>
      {cards.map((cards) => (
        <Cards key={cards.id} cards={cards} />
      ))}
    </ul>
  </section>
);

export default Preview;
