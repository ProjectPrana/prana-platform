import React from "react";
import style from './Exercises.module.scss';

const Exercises = () => {
  return (
    <div class={style.main__exercises}>
      <div class={style.main__results}>График результатов</div>
      <div class={style.main__teacher}> Преподаватель </div>
      <div class={style.main__calendar}>Календарь</div>
      <div class={style.main__honors}>Награды</div>
    </div>
  );
};

export default Exercises;