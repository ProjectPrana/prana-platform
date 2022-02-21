import React from "react";
import style from "./mainBloсk.module.scss";
import Sidebar from './SideBar/Sidebar';
import MainContainer from './MainContainer/MainContainer';

const MainBlock = () => {
    return (
        <main className={style.main}>
            <Sidebar />
            <MainContainer/>
        </main>
    )
};

export default MainBlock;