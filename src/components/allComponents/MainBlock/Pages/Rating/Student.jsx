import React from "react";
import style from './Student.module.scss';



const Student = (props) => {
    return (
    <div className={style.student}>
        <div className={style.student__st}>{props.name}</div>
        <div className={style.student__st}> {props.lesson}</div>
        <div className={style.student__st}>{props.lesson5} </div>
        <div className={style.student__st}> {props.lesson10} </div>
    </div>
    );
};

export default Student;