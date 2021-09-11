import React from "react";
import { useParams } from "react-router";
import style from "./QuoteDetail.module.css";
// import { useSelector } from "react-redux";

import Comment from "../Components/Content/Comments/Comment";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getSingleQuote } from "../api/api";
import useHttp from "../Hooks/useHttp";
import NotFound from './NotFound'

export default function QuoteDetails() {
  const dynamicTitle = useParams();
  // const matchTitle = useSelector((state) => state.reducer.quotes);

  const { sendReq, quotes, loading, status } = useHttp(getSingleQuote);

  // const ifTitle = matchTitle.filter((item) => {
  //   return item.desc === dynamicTitle.title;
  // });

  React.useEffect(() => {
    sendReq(dynamicTitle.id);
  }, [sendReq, dynamicTitle.id]);


  const getDesc = (quotes) => {
    try {
      return quotes[0].desc && quotes[0].uniqueID
    } catch (error) {
      return false
    }
  }

  return (
    <React.Fragment>
      {loading && (
        <div className={style.main}>
          <LoadingSpinner />
        </div>
      )}
      <div className={style.main}>
        {!loading && status && getDesc(quotes) && (
          <div className={style.content}>{quotes[0].desc}</div>
        )}
      </div>
      <div className={style.comments__show}>
        {!loading && status && getDesc(quotes) && <Comment uniqueID={quotes[0].uniqueID} />}
      </div>
      {!getDesc(quotes) && <NotFound msg="Quote Not Found" />}
    </React.Fragment>
  );
}
