import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const history = useHistory();

  // eslint-disable-next-line
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Eillie",
      company: "Google",
      theme: "dark",
      title: "software Enginner",
      email: "dream@gmail.com",
      message: `"Don't forget to code your dream"`,
      photo: null,
    },
    {
      id: 2,
      name: "Dankkim",
      company: "Instagram",
      theme: "light",
      title: "Frontend Developer",
      email: "dankkim@gmail.com",
      message: `"I love coding"`,
      photo: "/images/default_logo.png",
    },
    {
      id: 3,
      name: "Chris",
      company: "Facebook",
      theme: "colorful",
      title: "Backend Developer",
      email: "chris@gmail.com",
      message: `"Design your dream"`,
      photo: null,
    },
  ]);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push("/");
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
