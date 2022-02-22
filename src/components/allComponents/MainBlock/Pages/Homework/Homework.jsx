import React from "react";
import style from './Homework.module.scss';

const Homework = () => {
  return (
    <div class={style.main__homework}>
      <div class={style.main__results}>График результатов</div>
      <div class={style.main__teacher}> Преподаватель </div>
      <div class={style.main__calendar}>Календарь</div>
    </div>
  );
};

export default Homework;