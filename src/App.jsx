import { useState } from 'react';
import { MovieForm } from './components/MovieForm';
import { MovieList } from './components/MovieList';

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
  return (
    <>
      <h1>Min filmlista</h1>
      <MovieForm addMovie={addMovie} />
      <hr />
      <MovieList movies={movies} deleteMovie={deleteMovie} />
    </>
  );
};
