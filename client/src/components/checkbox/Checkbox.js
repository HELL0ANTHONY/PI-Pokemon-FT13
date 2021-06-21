import "./checkbox.css";

const Checkbox = ({ label, value, name, onChange }) => {
  return (
    <div className="checkbox">
      <label className="checkbox-label">
        <div className="checkbox-btn-container">
          <input
            className="checkbox-input"
            onChange={onChange}
            type="checkbox"
            value={value}
            name={name}
          />
        </div>
        <div className="checkbox-text">{label}</div>
      </label>
    </div>
  );
};

export default Checkbox;
