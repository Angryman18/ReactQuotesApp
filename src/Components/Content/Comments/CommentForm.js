import React from "react";
import style from "./CommentForm.module.css";
import Button from "../../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import useTouch from "../../../Hooks/useTouch";

const CommentForm = () => {
  const inputName = React.useRef();
  const inputComment = React.useRef();
  const dispatch = useDispatch();
  const getTempId = useSelector((state) => state.uiReducer.tempId);

  const { BlurHander, isTouched, reset } = useTouch();

  const nameTouch = isTouched("name");
  const commentTouch = isTouched("comment");

  const submitHandler = (e) => {
    e.preventDefault();
    const name = inputName.current.value;
    const comment = inputComment.current.value;
    const obj = {
      id: getTempId,
      name,
      comment,
    };
    if (name.trim().length < 3 || comment.trim().length < 1) {
      return;
    }
    dispatch({ type: "addComment", commentObj: obj });
    reset()
    inputName.current.value = "";
    inputComment.current.value = "";
  };

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
          <Button title="Add Comment" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default CommentForm;
