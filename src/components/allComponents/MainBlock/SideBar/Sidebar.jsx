import React from "react";
import style from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <asside className={style.sidebar}>
      <div className={style.sidebar__head}>
        <img src="" alt="" />
        <span className={style.sidebar__personName}> Голофастова Елена </span>
      </div>
      <div className={style.sidebar__tittle}>
        <span> Меню ученика: </span>
      </div>
      <div className={style.sidebar__button}>
        <a
          href="https://prana-club.com/"
          target="_blank"
          className={style.sidebar__link}
        >
          <svg>
            {" "}
            <path
              d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1
                                9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"
            >
              {" "}
            </path>
          </svg>
          <span> Стена ученика </span>
        </a>
      </div>
      <div className={style.sidebar__button}>
        <a
          href="https://prana-club.com/"
          target="_blank"
          className={style.sidebar__link}
        >
          <svg>
            <path
              d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1
                                                        9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"
            >
              {" "}
            </path>
          </svg>
          <span> Уроки </span>
        </a>
      </div>
      <div className={style.sidebar__button}>
        <a
          href="https://prana-club.com/"
          target="_blank"
          className={style.sidebar__link}
        >
          <svg>
            <path
              d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1
                                                        9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"
            >
              {" "}
            </path>
          </svg>
          <span> Домашнее задание </span>
        </a>
      </div>
      <div className={style.sidebar__button}>
        <a
          href="https://prana-club.com/"
          target="_blank"
          className={style.sidebar__link}
        >
          <svg>
            <path
              d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1
                                                        9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"
            >
              {" "}
            </path>
          </svg>
          <span> Упражнения </span>
        </a>
      </div>
      <div className={style.sidebar__button}>
        <a
          href="https://prana-club.com/"
          target="_blank"
          className={style.sidebar__link}
        >
          <svg>
            <path
              d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1
                                                        9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"
            >
              {" "}
            </path>
          </svg>
          <span> Список книг </span>
        </a>
      </div>
    </asside>
  );
};

export default Sidebar;
