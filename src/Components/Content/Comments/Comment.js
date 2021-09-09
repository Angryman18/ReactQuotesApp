import React from "react";
import Button from "../../../UI/Button";
import { useSelector } from "react-redux";
import CommentForm from "./CommentForm";
import style from "./Comment.module.css";
import CommentDisplay from "./CommentDisplay";


const Comment = () => {
  const [showComment, setShowComment] = React.useState(false);
  const [addComment, setAddComment] = React.useState(false);
  const getComments = useSelector((state) => state.reducer.comments);
  const getId = useSelector((state) => state.uiReducer.tempId);


  const ShowCommentHandler = (e) => {
    e.preventDefault();
    setShowComment(true);
  };

  const AddCommentHandler = (e) => {
    e.preventDefault();
    setAddComment(true);
  };

  return (
    <React.Fragment>
      <div id={style.main}>
        {!addComment && (
          <Button onClick={AddCommentHandler} title="Click Here to Comment" />
        )}
        {addComment && <CommentForm />}
      </div>
      <div id={style.main}>
        {!showComment && (
          <Button onClick={ShowCommentHandler} title="Load Comments" />
        )}
        {showComment &&
          getComments.map((item) => {
            if (item.id === getId) {
              return (
                <CommentDisplay
                  key={Math.random()}
                  name={item.name}
                  msg={item.comment}
                />
              );
            } else {
              return <CommentDisplay />
            }
          })}
      </div>
    </React.Fragment>
  );
};

export default Comment;
