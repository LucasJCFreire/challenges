import style from "./Button.module.scss";

export default function Button({ text, btnType, onClick, title, ariaLabel }) {
  return (
    <button
      className={`${style.btn} ${btnType ? style[btnType] : ""}`}
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}
