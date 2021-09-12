import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";

const Maker = ({ authService }) => {
  const history = useHistory();

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
      <div>maker 영역</div>
      <Footer />
    </section>
  );
};

export default Maker;
