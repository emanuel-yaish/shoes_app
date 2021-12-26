import "./CostumInput.css";

const CostumInput = ({ onInputChangeCallBack, value, name, type, label }) => {
  return (
    <div className="costum-input">
      <label className="costum-input-label" htmlFor={name}>
        {label} :{" "}
      </label>
      <input
        className="costum-input-input"
        type={type}
        name={name}
        value={value}
        onChange={onInputChangeCallBack}
      />
    </div>
  );
};

export default CostumInput;
