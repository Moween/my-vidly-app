// import * as genresAPI from './fakeGenreService';

const movies = [
  {
    id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    liked: false,
  },
  {
    id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    liked: false,
  },
  {
    id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    liked: false,
  },
  {
    id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false,
  },
];

const getMovie = (movieId) => {
  return movies.find((movie) => movie.id === movieId);
};

const findGenre = (newMovie) => {
  return movies.find((movie) => movie.genre.name === newMovie.genreId);
}


const saveMovie = (newMovie) => {
  const movieInDb = movies.includes((movie) => movie.id === newMovie.id) || {};
  movieInDb.title = newMovie.title;
  movieInDb.genre = findGenre(newMovie).genre;
  movieInDb.numberInStock = newMovie.numberInStock;
  movieInDb.dailyRentalRate = newMovie.dailyRentalRate;
  movieInDb.liked = false;

  if (!movieInDb.id) {
    movieInDb.id = `5b21ca3eeb7f6fbccd${Date.now().toString()}`;
    console.log('movieInDb', movieInDb.genre)
    movies.push(movieInDb)
  }

  return movieInDb;
};

export default movies;
export { getMovie, saveMovie };
