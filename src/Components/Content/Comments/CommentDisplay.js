import React from "react";
import style from './CommentDisplay.module.css';

const CommentDisplay = ({ name, msg }) => {
  return (
    <React.Fragment>
      <div className={style.card}>
        <span id={style.name}>{name}</span>
        <span id={style.msg}>{msg}</span>
      </div>
    </React.Fragment>
  );
};

export default CommentDisplay;
