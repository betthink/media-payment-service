import React from "react";

const OutlineButton = ({ label, action }) => {
  return (
    <>
      <button
        onClick={action}
        type="button"
        className={`btn bg-white rounded-none border border-red-600 text-red-600`}
      >
        {label}
      </button>
    </>
  );
};

export default OutlineButton;
