const Field = ({ label, type, name, onChange, value, error }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        label={label}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={label}
      />
      <div>
        <span className="text-danger">{error}</span>
      </div>
    </div>
  );
};

export default Field;

// onChange, value, error
