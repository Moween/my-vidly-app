import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Main from './components/Main'
import Movies from './components/movies/Movies'
import About from './components/About';
import MovieDetails from './components/movies/movie';
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className="content">
        <Switch>
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/About" component={About} />
          <Route path="/Movies" component={Movies} />
          <Route path="/" exact component={Main} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
