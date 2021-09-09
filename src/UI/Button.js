import defaultStyle from "./Button.module.css";
const Button = ({ style, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={!style ? defaultStyle.ButtonStyle : style}
    >
      {title}
    </button>
  );
};

export default Button;
