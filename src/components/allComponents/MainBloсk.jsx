import React from "react";
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

const MainBlock = () => {
    return (
        <main className="main">
            <Sidebar />
            <MainContainer/>
        </main>
    )
};

export default MainBlock;