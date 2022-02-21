import React from "react";
import style from "./mainContainer.module.scss";

const MainContainer = () => {
    return (
        <div class={style.main__container}>
            <div class={style.main__results}>График результатов</div>
            <div class={style.main__teacher}> Преподаватель </div>
            <div class={style.main__calendar}>Календарь</div>
            <div class={style.main__honors}>Награды</div>
            <div class={style.main__strongside}>Сильные стороны</div>
            <div class={style.main__courses}>курсы</div>                        
    </div>
    )
};

export default MainContainer;