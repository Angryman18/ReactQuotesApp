import React from "react";

const useTouch = () => {
  const [touch, setTouch] = React.useState({});

  const BlurHander = (e) => {
    const inputType = e.target.name;
    setTouch((preState) => {
      return { ...preState, [inputType]: true };
    });
  };

  const isTouched = (field) => {
    return touch[field];
  };

  const reset = () => {
    setTouch({})
  }

  return {
    BlurHander,
    isTouched,
    reset
  };
};

export default useTouch;
