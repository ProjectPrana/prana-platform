import React from "react";
import style from "./mainBloсk.module.scss";
import Sidebar from './SideBar/Sidebar';
import StudentPage from './StudentPage/StudentPage';
import MainLessons from './MainLessons/MainLessons';

const MainBlock = () => {
    return (
    <main className={style.main}>
        <Sidebar />
        <StudentPage />
        {/*<MainLessons />*/}
    </main>
    );
};

export default MainBlock;