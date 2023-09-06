import React from "react";

const SubmitButton = ({ bgColor, label, isDisable, onchange, name }) => {
  return (
    <>
      <button
        name={name}
        onChange={onchange}
        disabled={isDisable}
        type="submit"
        className={`btn rounded-none bg-${bgColor}-500 text-white`}
      >
        {label}
      </button>
    </>
  );
};

export default SubmitButton;
