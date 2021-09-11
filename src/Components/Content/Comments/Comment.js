import React, { useCallback } from "react";
import Button from "../../../UI/Button";
import CommentForm from "./CommentForm";
import style from "./Comment.module.css";
import CommentDisplay from "./CommentDisplay";

import { getComments } from "../../../api/api";
import useHttp from "../../../Hooks/useHttp";
import LoadingSpinner from "../../../UI/LoadingSpinner";

const Comment = ({ uniqueID }) => {
  const [showComment, setShowComment] = React.useState(false);
  const [addComment, setAddComment] = React.useState(false);

  const { sendReq, status, loading, quotes } = useHttp(getComments);

  const ShowCommentHandler = (e) => {
    e.preventDefault();
    setShowComment(true);
  };

  const AddCommentHandler = (e) => {
    e.preventDefault();
    setAddComment(true);
  };

  React.useEffect(() => {
    sendReq(uniqueID);
  }, [sendReq, uniqueID, showComment]);

  const reload = useCallback(() => {
    sendReq(uniqueID);
  }, [sendReq, uniqueID]);

  const showComments = showComment && !loading && status;

  return (
    <React.Fragment>
      <div id={style.main}>
        {!addComment && (
          <Button onClick={AddCommentHandler} title="Click Here to Comment" />
        )}
        {addComment && <CommentForm reloadComments={reload} />}
      </div>
      <div id={style.main}>
        {!showComment && (
          <Button onClick={ShowCommentHandler} title="Load Comments" />
        )}
        {showComments &&
          quotes &&
          quotes.map((item) => {
            return (
              <CommentDisplay
                key={item.id}
                name={item.name}
                msg={item.comment}
              />
            );
          })}
        {showComment && loading && <LoadingSpinner />}
        {showComments && !loading && !quotes.length && (
          <h4>No Comments are Added!</h4>
        )}
      </div>
    </React.Fragment>
  );
};

export default Comment;
