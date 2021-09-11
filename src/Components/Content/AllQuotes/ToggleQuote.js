import React from "react";
import style from "./ToggleQuote.module.css";
import { NavLink } from "react-router-dom";

function ToggleQuote({ desc, id }) {
  return (
    <NavLink to={`/quote/${id}`}>
      <div className={style.main}>
        <div className={style.content}>
          <h3>{desc}</h3>
        </div>
      </div>
    </NavLink>
  );
}

export default ToggleQuote;
