import React from "react";
import style from './Rating.module.scss';
import Student from './Student'



const Rating = () => {

let Result = [
  { name: 'Марк', lesson: '35', lesson5: '56', lesson10: '94' },
  { name: 'Жора', lesson: '23', lesson5: '31', lesson10: '104' },
  { name: 'Гриша', lesson: '41', lesson5: '47', lesson10: '99' },
  { name: 'Ваня', lesson: '62', lesson5: '56', lesson10: '91' },
];

let newResult = Result.map(result => (
  <Student
    name={result.name}
    lesson={result.lesson}
    lesson5={result.lesson5}
    lesson10={result.lesson10}
  />
));

  return (
    <div className={style.main__rating}>
      <h2 className={style.main__results}> Рейтинг учеников </h2>
      <div className={style.studentsResults}>
        <div className={style.studentsResults__tabl}>
          <div className={style.studentsResults__cell}> Имя </div>
          <div className={style.studentsResults__cell}> Резульат на Урок№1</div>
          <div className={style.studentsResults__cell}> Резульат на Урок№5 </div>
          <div className={style.studentsResults__cell}> Резульат на Урок№10 </div>
          <div className={style.studentsResults__test}>{newResult}</div>
        </div>
      </div>
    </div>
  );
};

export default Rating;