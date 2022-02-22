import React from "react";
import style from './Bookslist.module.scss';

const Bookslist = () => {
  return (
    <div class={style.main__bookslist}>
      <div class={style.main__results}>График результатов</div>      
    </div>
  );
};

export default Bookslist;