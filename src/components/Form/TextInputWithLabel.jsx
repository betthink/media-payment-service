import { Field } from "formik";
import React from "react";

const TextInputWithLabel = ({ label, placeholder, name, onChange, value }) => {
  return (
    <div className="form-control w-full ">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <Field
        value={value}
        name={name}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="input rounded-none input-bordered w-full "
      />
    </div>
  );
};

export default TextInputWithLabel;
