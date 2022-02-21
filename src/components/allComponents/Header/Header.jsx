import React from "react";
import "../variables/variables.scss";
import style from './header.module.scss';


const Header = () => {
    return (
    <header className={style.header}>
                    <div className="header__container">
                        <div className="header__logo logo">                            
                            <div className="logo__name"> Platform </div>
                        </div>                        
                        <div className="header__allbutton">
                            <div className="header__button">
                                <a href="" className="header__link" target="_blank" > <span>Наши курсы</span></a>
                            </div>
                            <div className="header__button">
                                <a href="" className="header__link" target="_blank"> <span>Преподаватели</span></a>
                            </div>
                            <div className="header__button">
                                <a href="" className="header__link" target="_blank"> <span>Рейтинг</span></a>
                            </div>
                            <div className="header__button">
                                <a href="" className="header__link" target="_blank"> <span>Статьи</span></a>
                            </div>
                            <div className="header__button">
                                <a href="" className="header__link" target="_blank"> <span>О нас</span></a>
                            </div>
                            <div className="header__button">
                                <a href="" className="header__link" target="_blank"> <span>Контакты</span></a>
                            </div>
                        </div>
                        <div className="header__authorization enter">
                            <a href="https://prana-club.com/" className="enter__button">
                                <span> Вход </span>
                            </a>
                        </div>
                    </div>
    </header>
);
}


export default Header;