import React from "react";
import Movie from "./MovieData";
import "./css/table.css";

const Table = (props) => {
  const { movies, onDelete, onLike } = props;
  return (
    <table className="table w-75 caption-top table-striped">
      <caption className="">Box-Office Movies</caption>
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Number in stock</th>
          <th scope="col">Rental Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <Movie
          movies={movies}
          onDelete={onDelete}
          onLike={onLike}
        />
      </tbody>
    </table>
  );
};

export default Table;
