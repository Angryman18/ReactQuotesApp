import React from "react";
import { useParams } from "react-router";
import style from "./QuoteDetail.module.css";
import { useSelector } from "react-redux";

import Comment from "../Components/Content/Comments/Comment";

export default function QuoteDetails() {
  const dynamicTitle = useParams();
  const matchTitle = useSelector(state => state.reducer.quotes)

  const ifTitle = matchTitle.filter(item => {
    return item.desc === dynamicTitle.title
  })

  return (
    <React.Fragment>
      <div className={style.main}>
        <div className={style.content}>{ifTitle.length > 0 && dynamicTitle.title}</div>
      </div>
      <div className={style.comments__show}>
        {ifTitle.length > 0 && <Comment />}
      </div>
    </React.Fragment>
  );
}
