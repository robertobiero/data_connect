import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.movies.title}</h2>
      <h3>{props.movies.release_date}</h3>
      <p>{props.movies.opening_crawl}</p>
    </li>
  );
};

export default Movie;
