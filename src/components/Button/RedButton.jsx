import React from "react";

export const RedButton = ({ label }) => {
  return (
    <>
      <button
        type="button"
        className={`btn rounded-none bg-red-500 text-white`}
      >
        {label}
      </button>
    </>
  );
};
