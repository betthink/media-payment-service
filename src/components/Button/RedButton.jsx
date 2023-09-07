import React from "react";

export const RedButton = ({ label, type, onClick }) => {
  return (
    <>
      <button onClick={onClick}
        type={type}
        className={`btn rounded-none bg-redDominan text-white`}
      >
        {label}
      </button>
    </>
  );
};
