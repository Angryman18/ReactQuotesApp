import React from "react";
import style from "./CommentForm.module.css";
import Button from "../../../UI/Button";
import { useSelector } from "react-redux";
import useTouch from "../../../Hooks/useTouch";

import { sendComment } from "../../../api/api";
import useHttp from "../../../Hooks/useHttp";
import LoadingSpinner from "../../../UI/LoadingSpinner";


const CommentForm = ({reloadComments}) => {
  const inputName = React.useRef();
  const inputComment = React.useRef();
  const getTempId = useSelector((state) => state.uiReducer.tempId);

  const { BlurHander, isTouched, reset } = useTouch();

  const { sendReq, status, loading } = useHttp(sendComment);

  const nameTouch = isTouched("name");
  const commentTouch = isTouched("comment");

  const submitHandler = (e) => {
    e.preventDefault();
    const name = inputName.current.value;
    const comment = inputComment.current.value;
    if (name.trim().length < 3 || comment.trim().length < 1) {
      return;
    }
    const theComment = {
      id: getTempId,
      body: {
        name,
        comment,
      },
    };
    sendReq(theComment);
    reset();
    inputName.current.value = "";
    inputComment.current.value = "";
  };

  React.useEffect(() => {
    if (status) {
      reloadComments()
    }
  }, [status, reloadComments])

  
  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className={style.comment__Form}>
        <div id={style.element}>
          <label>Name: </label>
          {nameTouch && inputName.current.value.trim().length < 3 ? (
            <p className={style.error}>Invalid Name</p>
          ) : (
            ""
          )}
          <input
            className={style.nameInput}
            onBlur={BlurHander}
            name="name"
            ref={inputName}
            placeholder="Your Name"
            type="text"
          />
        </div>
        <div id={style.element}>
          <label>Comment: </label>
          {commentTouch && inputComment.current.value.trim().length === 0 ? (
            <p className={style.error}>Invalid Comment</p>
          ) : (
            ""
          )}
          <textarea
            className={style.commentInput}
            onBlur={BlurHander}
            name="comment"
            ref={inputComment}
            placeholder="Write Comment"
            type="text"
          />
        </div>
        <div id={style.element}>
          {!loading && <Button title="Add Comment" />}
          {loading && <LoadingSpinner />}
        </div>
      </form>
    </React.Fragment>
  );
};

export default CommentForm;
