import React from "react";

const SideBar = (props) => {
  const { movieGenres, onSelectGenre, selectedGenre, showAllGenres } = props;
  return (
    <ul className="list-group col-2">
      {/* If Selected Genre is null, add active class list-item */}
      <li className={!selectedGenre ? "list-group-item active" : "list-group-item"} onClick={showAllGenres}>All Genres</li>
      {movieGenres.map((genre) => (
        <li
          key={genre._id}
          // /* If Selected Genre is the same with genre, add active class to list-item */
          className={ genre === selectedGenre ? "list-group-item active" : "list-group-item"}
          onClick={() => onSelectGenre(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
