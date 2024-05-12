import React from 'react';
import starImage from '../assets/star.png';
import deleteImage from '../assets/delete.png';
import '../styles/MovieList.style.css';

export const MovieList = ({ movies, deleteMovie }) => {
  return (
    <div>
      <h2>Filmer</h2>
      <ul id='movies'>
        {movies.map((movie, index) => (
          <li key={index} data-grade={movie.rating} data-title={movie.title}>
            <span>{movie.title}</span>

            {Array.from({ length: movie.rating }, (_, i) => (
              <img key={i} src={starImage} alt='Star' className='star' />
            ))}

            <img
              src={deleteImage}
              alt='Delete movie'
              className='delete-movie-icon'
              onClick={() => deleteMovie(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
