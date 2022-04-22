import React from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ card, updateCard, deleteCard, FileInput }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onFileChange = (file) => {
    updateCard({ ...card, fileName: file.name, fileURL: file.url });
  };
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    deleteCard(card);
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      ></input>
      <select
        className={styles.select}
        name="theme"
        onChange={onChange}
        value={theme}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      ></input>
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
