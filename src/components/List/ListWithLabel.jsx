import React from "react";

const ListWithLabel = ({ Label, icon, title }) => {
  return (
    <div className="w-full ">
      <label className="label">
        <span className="label-text">{Label}</span>
      </label>
      <div className="input input-bordered border-1 w-full  items-center flex gap-2 rounded-md">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ListWithLabel;
