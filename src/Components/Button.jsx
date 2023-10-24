import "../assets/button.css";

const Button = ({ type, color, text }) => {
  return (
    <a href="#" className={type} style={{ backgroundColor: color }}>
      <button>
        {text}
        <i className="fa-solid fa-arrow-up-right"></i>
      </button>
    </a>
  );
};

export default Button;
