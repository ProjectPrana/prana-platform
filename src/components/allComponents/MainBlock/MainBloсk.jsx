import React from "react";
import Sidebar from './SideBar/Sidebar';
import MainContainer from './MainContainer/MainContainer';

const MainBlock = () => {
    return (
        <main className="main">
            <Sidebar />
            <MainContainer/>
        </main>
    )
};

export default MainBlock;