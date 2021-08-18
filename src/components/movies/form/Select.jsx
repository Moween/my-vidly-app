import React from "react";

const Select = ({ name, label, errors, genres, handleChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="movie-genres" className="form-label text-start w-50">
        {label}
      </label>
      {errors && (
        <p className="alert alert-danger w-50 me-auto ms-auto p-0">{errors}</p>
      )}
      <select
        name={name}
        className="form-control w-50 me-auto ms-auto"
        id="movie-genres"
        onChange={handleChange}
      >
        <option value="">Choose...</option>
        {genres.map((genre) => (
          <option key={genre._id} id={genre._id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
