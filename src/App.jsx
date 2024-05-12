import { useState } from 'react';
import { MovieForm } from './components/MovieForm';
import { MovieList } from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const deleteMovie = (index) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
  };

  const sortMoviesAlphabetically = () => {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
  };

  const sortMoviesByRating = () => {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
  };

  return (
    <div className='container mt-4'>
      <div className='row justify-content-center'>
        <div className='col-lg-8 col-md-10 col-sm-12'>
          <h1 className='text-center mb-4'>Min filmlista</h1>
          <MovieForm addMovie={addMovie} />
          <hr />
          <MovieList movies={movies} deleteMovie={deleteMovie} />
          <button type='button' className='btn btn-primary me-3' onClick={sortMoviesAlphabetically}>
            Alfabetisk ordning
          </button>
          <button type='button' className='btn btn-primary' onClick={sortMoviesByRating}>
            Betygsordning
          </button>
        </div>
      </div>
    </div>
  );
};
