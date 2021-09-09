import style from "./AddQuotes.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import useTouch from "../Hooks/useTouch";

const AddQuote = () => {
  const title = React.useRef();
  const desc = React.useRef();

  const dispatch = useDispatch();
  const { BlurHander, isTouched, reset } = useTouch();

  const titleTouch = isTouched("title");
  const descTouch = isTouched("desc");

  const submitHandler = (e) => {
    e.preventDefault();
    const name = title.current.value;
    const description = desc.current.value;
    const obj = {
      title: name,
      desc: description,
    };
    if (name.trim().length <= 3 || description.trim().length <= 5) {
      return;
    }
    dispatch({ type: "add", quote: obj });
    reset()
    title.current.value = "";
    desc.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={style.main}>
      <div className={style.content}>
        <label>Title of the Quote: </label>
        {titleTouch && title.current.value.trim().length <= 3 ? (
          <p className={style.para}>Title Shoule be at Least 4 Chars Long</p>
        ) : (
          ""
        )}
      </div>
      <div className={style.content}>
        <input
          className={style.input}
          onBlur={BlurHander}
          ref={title}
          type="text"
          name="title"
          placeholder="Enter Title"
        />
      </div>
      <div className={style.content}>
        <label>Quote Description: </label>
        {descTouch && desc.current.value.trim().length <= 5 ? (
          <p className={style.para}>
            Descriptions Shoube be at least 6 Char Long
          </p>
        ) : (
          ""
        )}
      </div>
      <div className={style.content}>
        <textarea
          className={style.textarea}
          onBlur={BlurHander}
          ref={desc}
          name="desc"
          placeholder="Description"
        />
      </div>
      <div className={style.content}>
        <Button style={style.button} title="Add Quote" />
      </div>
    </form>
  );
};

export default AddQuote;
