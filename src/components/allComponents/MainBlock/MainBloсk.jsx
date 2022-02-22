import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import style from "./mainBloсk.module.scss";
import Sidebar from './SideBar/Sidebar';
import StudentPage from './Pages/StudentPage/StudentPage';
import MainLessons from './Pages/MainLessons/MainLessons';
import Homework from './Pages/Homework/Homework';
import Exercises from './Pages/Exercises/Exercises';
import Bookslist from './Pages/Bookslist/Bookslist';

const MainBlock = () => {
    return (
    <main className={style.main}>
        <Sidebar />
        <Routes>
            <Route path="/" element={<StudentPage />} />
            <Route path="/studentpage" element={<StudentPage />} />
            <Route path="/lessons" element={<MainLessons />} />
            <Route path="/homework" element={<Homework />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/bookslist" element={<Bookslist />} />
        </Routes>
    </main>
    );
};

export default MainBlock;