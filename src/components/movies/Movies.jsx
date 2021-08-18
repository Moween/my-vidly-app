import React, { Component } from "react";
import { Link } from 'react-router-dom';
import movies from "../../services/fakeMovieService";
import { genres } from "../../services/fakeGenreService";
import Table from "./MoviesTable";
import Pagination from "../Pagination";
import SideBar from "./MovieGenres";
import { paginate } from "../../utils/pagination";

class Main extends Component {
  state = {
    movies: movies,
    genres,
    selectedGenre: null,
    currentPage: 1,
    numOfItems: 3, // Number of items to display on each page
  };

  handleSelectGenre = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleAllGenres = () => {
    this.setState({ selectedGenre: null });
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
  };

  render() {
    const { movies, currentPage, numOfItems, genres, selectedGenre } =
      this.state;
    const filtered = selectedGenre
      ? movies.filter((movie) => movie.genre.id === selectedGenre._id)
      : movies;
    const moviesCollection = paginate(filtered, currentPage, numOfItems);
    return (
      <div className="container">
        {movies.length === 0 ? (
          <p>No Movies in the database</p>
        ) : (
          <>
            <p>You have {filtered.length} in the database</p>
            <Link to="/movie/new" className="btn btn-primary btn-md">
              New Movie
            </Link>
            <div className="row align-items-center justify-content-around">
              <SideBar
                movieGenres={genres}
                onSelectGenre={this.handleSelectGenre}
                showAllGenres={this.handleAllGenres}
                selectedGenre={selectedGenre}
              />
              <Table
                movies={moviesCollection}
                onDelete={this.handleDelete}
                onLike={this.handleLike}
              />
            </div>
            <Pagination
              itemsCount={filtered.length}
              numOfItemsToDisplay={numOfItems}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </>
        )}
      </div>
    );
  }
}

export default Main;
