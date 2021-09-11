import style from "./AddQuotes.module.css";
import React from "react";
// import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import useTouch from "../Hooks/useTouch";
import { useHistory } from "react-router";

import useHttp from "../Hooks/useHttp";
import { sendData } from "../api/api";

const AddQuote = () => {
  // INPUT
  const title = React.useRef();
  const desc = React.useRef();
  // DATABASE
  const {sendReq, status} = useHttp(sendData)
  // URL REDIRECT
  const history = useHistory()
  // INPUT ERROR HANDER
  const { BlurHander, isTouched } = useTouch();
  // INPUT TOUCH TRACK
  const titleTouch = isTouched("title");
  const descTouch = isTouched("desc");

  const submitHandler = (e) => {
    e.preventDefault();
    const name = title.current.value;
    const description = desc.current.value;
    const obj = {
      id: Math.random(),
      title: name,
      desc: description,
    };
    if (name.trim().length <= 3 || description.trim().length <= 5) {
      return;
    }
    sendReq(obj)    
  };

  React.useEffect(() => {
    if (status) {
      history.push('/')
    }
  }, [status, history])

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
