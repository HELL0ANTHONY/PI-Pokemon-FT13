import ButtonLogic from "./ButtonLogic";
import "./button.css";

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const { includesSize, includesStyle } = ButtonLogic();
  const checkButtonStyle = includesStyle(buttonStyle);
  const checkButtonSize = includesSize(buttonSize);

  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
