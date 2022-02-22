import React from "react";
import style from './Homework.module.scss';

const Homework = () => {
  return (
    <div className={style.main__homework}>
      <div className={style.main__results}>График результатов</div>
      <div className={style.main__teacher}> Преподаватель </div>
      <div className={style.main__calendar}>Календарь</div>
    </div>
  );
};

export default Homework;