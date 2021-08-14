import React from "react";

const Like = (props) => {
  const { onLike, movie } = props;
  const { liked } = movie;
  return (
    <i
      className={ liked ? "fas fa-heart" : "far fa-heart"}
      onClick={() => onLike(movie.id)}
    ></i>
  );
};

export default Like;
