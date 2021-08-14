import React, { Component } from "react";
import movies from "../../services/fakeMovieService";
import Table from "./MoviesTable";
import Pagination from "../Pagination";

class Main extends Component {
  state = {
    movies: movies,
    currentPage: 1,
    numOfItems: 3,
  };

  handleDelete = (movieId) => {
    let { movies } = this.state;
    movies = movies.filter((movie) => movie.id !== movieId);
    this.setState({ movies });
  };

  handleLike = (movieId) => {
    let { movies } = this.state;
    const newMovies = [...movies];
    const index = newMovies.findIndex((movie) => movie.id === movieId);
    newMovies[index].liked = !newMovies[index].liked;
    this.setState({ movies: newMovies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    const { movies, currentPage, numOfItems } = this.state;
    return (
      <div>
        {movies.length === 0 ? (
          <p>No Movies in the database</p>
        ) : (
          <Table
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
        )}
        <Pagination
          itemsCount={movies.length}
          numOfItemsToDisplay={numOfItems}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Main;
