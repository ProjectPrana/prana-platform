import React from "react";
import style from "./header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={`${style.header__logo} ${style.logo}`}>
          <div className={style.logo__name}> Platform </div>
        </div>
        <div className={style.header__allbutton}>
          <div className={style.header__button}>
            <a href="" className={style.header__link} target="_blank">
              {" "}
              <span>Наши курсы</span>
            </a>
          </div>
          <div className={style.header__button}>
            <a href="" className={style.header__link} target="_blank">
              {" "}
              <span>Преподаватели</span>
            </a>
          </div>
          <div className={style.header__button}>
            <a href="" className={style.header__link} target="_blank">
              {" "}
              <span>Рейтинг</span>
            </a>
          </div>
          <div className={style.header__button}>
            <a href="" className={style.header__link} target="_blank">
              {" "}
              <span>Статьи</span>
            </a>
          </div>
          <div className={style.header__button}>
            <a href="" className={style.header__link} target="_blank">
              {" "}
              <span>О нас</span>
            </a>
          </div>
          <div className={style.header__button}>
            <a href="" className={style.header__link} target="_blank">
              {" "}
              <span> Контакты </span>
            </a>
          </div>
        </div>
        <div className={`${style.header__authorization} ${style.enter}`}>
          <a href="https://prana-club.com/" className={style.enter__button}>
            <span> Вход </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
