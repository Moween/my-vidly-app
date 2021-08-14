import React from "react";
import Like from "./Like";
import { Link } from 'react-router-dom'

const TableData = (props) => {
  const { movies, onDelete, onLike } = props;
  return (
    <>
      {movies.map((movie) => {
        return (
          <tr key={movie.id}>
            <td><Link to={`/movie/${movie.id}`}>{movie.title}</Link></td>
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
