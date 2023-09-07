import React from "react";

const SubmitButton = ({ bgColor, label, isDisable, onchange, name }) => {
  return (
    <>
      <button
        name={name}
        onChange={onchange}
        disabled={isDisable}
        type="submit"
        className={`btn rounded-none ${bgColor} text-white`}
      >
        {label}
      </button>
    </>
  );
};

export default SubmitButton;
