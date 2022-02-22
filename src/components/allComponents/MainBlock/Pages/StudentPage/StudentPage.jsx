import React from "react";
import style from './StudentPage.module.scss';


const StudentPage = () => {
  return (
    <div className={style.main__studentPage}>
      <div className={style.main__results}>График результатов</div>
      <div className={style.main__teacher}> Преподаватель </div>
      <div className={style.main__calendar}>Календарь</div>
      <div className={style.main__honors}>Награды</div>
      <div className={style.main__strongside}>Сильные стороны</div>
      <div className={style.main__courses}>курсы</div>
    </div>
  );
};

export default StudentPage;