import React from "react";
import Joi from "joi-browser";
import { genres, getGenres } from "../../services/fakeGenreService";
import { getMovie, saveMovie } from "../../services/fakeMovieService";
import Form from "./form/Form";

class MovieDetails extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        id: "",
        title: "",
        genreId: "",
        numberInStock: "",
        dailyRentalRate: "",
      },
      genres: [],
      errors: {},
    };

    this.schema = {
      id: Joi.string().required().label("ID"),
      title: Joi.string().required().label("Movie title"),
      genreId: Joi.string().required().label("Genre"),
      numberInStock: Joi.number()
        .integer()
        .min(0)
        .max(100)
        .required()
        .label("Stock"),
      dailyRentalRate: Joi.number()
        .min(0)
        .max(10)
        .required()
        .label("Rental rate"),
    };
  }

  componentDidMount() {
    const movieGenres = genres;
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") {
      return;
    }

    const movie = getMovie(movieId);
    if (!movie) {
      return this.props.history.replace("/NotFound");
    }
    this.setState({ data: this.mapToViewMethod(movie) });
  }

  mapToViewMethod(movie) {
    console.log('genre', movie.genre.name);
    return {
      id: movie.id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  doSubmit() {
    console.log("Submitted");
    const data = this.handleSave();
    console.log('after submit', data);
  }

  handleSave = () => {
    let data = { ...this.state.data };
    console.log('State data', data)
    data = saveMovie(data);
    const { history } = this.props;
    history.replace("/movies");
    return data;
  };


  render() {
    const movieGenres = genres;
    return (
      <div className="container mt-4">
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("id", "ID")}
          {this.renderInputField("title", "Title")}
          {this.renderSelect("genreId", "Genre", movieGenres)}
          {this.renderInputField("numberInStock", "Number in Stock", "number")}
          {this.renderInputField("dailyRentalRate", "Rental Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieDetails;
