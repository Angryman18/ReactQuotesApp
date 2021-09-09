import React from "react";
import style from "./AllQuotes.module.css";
import AllQuotesComp from "../Components/Content/AllQuotes/AllQuotesComp";
import { useSelector } from "react-redux";

const AllQuotes = () => {
  const getQuote = useSelector((state) => state.reducer.quotes);

  return (
    <div className={style.content}>
      {getQuote &&
        getQuote.map((item) => {
          return <AllQuotesComp key={item.id} {...item} />;
        })}
    </div>
  );
};

export default AllQuotes;
