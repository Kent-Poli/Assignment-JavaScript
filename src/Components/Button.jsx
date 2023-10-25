import "../Style/button.css";

const Button = ({ href, type, width, height, text }) => {
  const classes = `center ${type}`;
  return (
    <a href={href} style={{ width: width, height: height }} className={classes}>
      {text}
      <i className="fa-solid fa-arrow-up-right"></i>
    </a>
  );
};

export default Button;
