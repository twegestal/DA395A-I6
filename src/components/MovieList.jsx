import React from 'react';
import starImage from '../assets/star.png';
import deleteImage from '../assets/delete.png';

export const MovieList = ({ movies, deleteMovie }) => {
  return (
    <div>
      <h2>Filmer</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title}
            {' '
              .repeat(movie.rating)
              .split('')
              .map((_, i) => (
                <img key={i} src={starImage} alt='Star' />
              ))}
            <button onClick={() => deleteMovie(index)}>
              <img src={deleteImage} alt='Delete movie' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
