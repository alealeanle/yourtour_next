const Button = ({ text, type, style }) => {
  return (
    <button type={type} className={style}>
      {text}
    </button>
  );
};

export default Button;
