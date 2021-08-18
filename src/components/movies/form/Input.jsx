import React from "react";

const Input = ({ name, label, errors, handleChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={`user-${name}1`} className="form-label text-start w-50">
        {label}
      </label>
      {errors && <p className="alert alert-danger w-50 me-auto ms-auto p-0">{errors}</p>}
      <input
        type={name}
        name={name}
        className="form-control w-50 me-auto ms-auto"
        id={`user-${name}1`}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
