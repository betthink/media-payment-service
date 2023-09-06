import React from "react";

const TextInput = ({ type, placeholder, value, onChange, name, isDisable }) => {
  return (
    <>
      <input
      
      disabled={isDisable}
       name={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className="input input-bordered rounded-none w-full"
      />
    </>
  );
};

export default TextInput;
