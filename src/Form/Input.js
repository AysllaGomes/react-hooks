const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
