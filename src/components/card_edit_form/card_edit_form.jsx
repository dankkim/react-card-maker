import React from "react";
import styles from "./card_edit_form.module.css";
import ImageFileInput from "../image_file_input/image_file_input";
import Button from "../button/button";

const CardEditForm = ({ card }) => {
  const { name, company, theme, title, email, message, photo } = card;

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" value={name} />
      <input className={styles.input} type="text" value={company} />
      <select className={styles.select} value={theme}>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" value={title} />
      <input className={styles.input} type="text" value={email} />
      <textarea className={styles.textarea}>{message}</textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" />
    </form>
  );
};

export default CardEditForm;
