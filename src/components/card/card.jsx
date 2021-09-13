import React from "react";
import styles from "./card.module.css";

const defaultURL = `/images/default_logo.png`;

const Card = ({ card }) => {
  const { name, company, theme, title, email, message, photo } = card;

  const url = photo === null ? defaultURL : photo;

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <div className={styles.photo}>
        <img src={url} alt="profile" />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
