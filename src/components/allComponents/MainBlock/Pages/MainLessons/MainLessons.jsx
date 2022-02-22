import React from "react";
import style from './MainLessons.module.scss';

const MainLessons = () => {
  return (
    <div class={style.main__mainLessons}>
      <div class={style.main__results}>График результатов</div>
      <div class={style.main__teacher}> Преподаватель </div>
      <div class={style.main__calendar}>Календарь</div>
      <div class={style.main__honors}>Награды</div>
      <div class={style.main__strongside}>Сильные стороны</div>
      <div class={style.main__courses}>курсы</div>
    </div>
  );
};

export default MainLessons;