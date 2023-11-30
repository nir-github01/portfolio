import React from "react";

const Input = ({label, labelId, id, placeholder, onChange,  type, name, inputClass, labelClass}) => {
  return (
    <div>
      <div className="input-wrapper">
        <label htmlFor={id} id={labelId} className={"form-label"+ labelClass}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          className={"form-input" + inputClass}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
