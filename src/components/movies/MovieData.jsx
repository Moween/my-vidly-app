import React from "react";
import Like from "./Like";

const TableData = (props) => {
  const { movies, onDelete, onLike } = props;
  return (
    <>
      {movies.map((movie) => {
        return (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like movie={movie} id={movie.id}  onLike={onLike} />
            </td>
            <td>
              <button
                className="btn-danger btn p-2"
                type="button"
                onClick={() => onDelete(movie.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableData;
