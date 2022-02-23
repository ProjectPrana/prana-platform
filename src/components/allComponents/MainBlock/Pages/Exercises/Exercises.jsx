import React from "react";
import style from './Exercises.module.scss';

const Exercises = () => {
  return (
    <div className={style.main__exercises}>
      <div className={style.main__results}>График результатов</div>
      <div className={style.main__teacher}> Преподаватель </div>
      <div className={style.main__calendar}>Календарь</div>
      <div className={style.main__honors}>Награды</div>
    </div>
  );
};

export default Exercises;