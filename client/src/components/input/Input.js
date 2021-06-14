import "./input.css";
const Input = ({ label, type, name, value, onChange, error }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    {error && <p className="form--error">{error}</p>} 
    </>
  );
};

export default Input;
