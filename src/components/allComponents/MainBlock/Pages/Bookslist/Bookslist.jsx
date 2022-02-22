import React from "react";
import style from './Bookslist.module.scss';

const Bookslist = () => {
  return (
    <div className={style.main__bookslist}>
      <div className={style.main__results}>График результатов</div>      
    </div>
  );
};

export default Bookslist;