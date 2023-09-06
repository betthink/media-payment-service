import React from "react";

const TextInput = ({ type, placeholder, value, onchange }) => {
  return (
    <>
      <input
        onChange={onchange}
        value={value}
        type={type}
        placeholder={placeholder}
        className="input input-bordered rounded-none w-full"
      />
    </>
  );
};

export default TextInput;
