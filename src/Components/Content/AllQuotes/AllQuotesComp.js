import style from "./AllQuotesComp.module.css";
import React from "react";
import ToggleQuote from "./ToggleQuote";
import { useDispatch } from "react-redux";

const AllQuotesComp = ({ title, desc, id }) => {
  const [toggle, setToggle] = React.useState(false);
  const dispatch = useDispatch()

  const ToggleHandler = () => {
    setToggle(!toggle);
    dispatch({type: "tempID", id: id})
  };

  return (
    <React.Fragment>
      <div onClick={ToggleHandler} className={style.content}>
        <div className={style.content__inner}>
          <h4>{title}</h4>
        </div>
      </div>
      {toggle && <ToggleQuote title={title} desc={desc} />}
    </React.Fragment>
  );
};

export default AllQuotesComp;
