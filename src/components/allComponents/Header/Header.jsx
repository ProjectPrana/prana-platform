import React from "react";
import { Link } from 'react-router-dom';
import style from "./header.module.scss";

let alertClick = () => alert('Hello my friend');

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={`${style.header__logo} ${style.logo}`}>
          <div className={style.logo__name}> Platform </div>
        </div>
        <div className={style.header__allbutton}>
          <div className={style.header__button}>
            <Link to="/ourcourses" className={style.header__link}>
              {' '}
              <span>Наши курсы</span>
            </Link>
          </div>
          <div className={style.header__button}>
            <Link to="/ourteachers" className={style.header__link}>
              {' '}
              <span>Преподаватели</span>
            </Link>
          </div>
          <div className={style.header__button}>
            <Link to="/rating" className={style.header__link}>
              {' '}
              <span>Рейтинг</span>
            </Link>
          </div>
          <div className={style.header__button}>
            <Link to="/articles" className={style.header__link}>
              {' '}
              <span>Статьи</span>
            </Link>
          </div>
          <div className={style.header__button}>
            <Link to="/aboutus" className={style.header__link}>
              {' '}
              <span>О нас</span>
            </Link>
          </div>
          <div className={style.header__button}>
            <Link to="/сontacts" className={style.header__link}>
              {' '}
              <span> Контакты </span>
            </Link>
          </div>
        </div>
        <div className={`${style.header__authorization} ${style.enter}`}>
          <a href="#" onClick={alertClick} className={style.enter__button}>
            <span> Вход </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
