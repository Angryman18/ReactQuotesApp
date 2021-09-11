import React from "react";
import style from "./AllQuotes.module.css";
import AllQuotesComp from "../Components/Content/AllQuotes/AllQuotesComp";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory, useLocation } from "react-router";
// import NotFound from "./NotFound";

import useHttp from "../Hooks/useHttp";
import { getData } from "../api/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const AllQuotes = () => {
  const { sendReq, quotes, loading, status } = useHttp(getData);

  // const histroy = useHistory();
  // const { search } = useLocation();

  // const getParams = new URLSearchParams(search);
  // const paramStatus = getParams.get("sort") === "asec";

  React.useEffect(() => {
    sendReq();
  }, [sendReq]);

  // const sortHandler = () => {
  //   histroy.push(`/?sort=${paramStatus ? "desc" : "asec"}`);
  // };

  return (
    <React.Fragment>
      <div className={style.content}>
        {/* <button onClick={sortHandler}>
          Sort {paramStatus ? "Decending" : "Asending"}
        </button> */}
        {loading && <LoadingSpinner />}
        {status && !quotes.length && <h4>No Quotes Found</h4>}
        {status &&
          quotes.map((item) => {
            return (
              <AllQuotesComp key={item.id} {...item} uniqueID={item.uniqueID} />
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default AllQuotes;
