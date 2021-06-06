import React from 'react';

const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    target.checked
      ? setValue([...value, target.value])
      : setValue(value.filter((linguagem) => linguagem !== target.value));
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
