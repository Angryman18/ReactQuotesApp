import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.logo}>
        <h3>Quotes World</h3>
      </div>
      <div className={style.links}>
        <nav>
          <ul>
            <NavLink activeClassName={style.activeLinks} to="/" exact>
              <li>All Quotes</li>
            </NavLink>

            <NavLink activeClassName={style.activeLinks} to="/addquotes">
              <li>Add Quotes</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
