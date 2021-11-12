import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const Tv = (props) => {
    const [tv, setTv] = useState([]);
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  
   
  
    useEffect(() => {
      getUpcomingMovies().then(movies => {
        setMovies(movies);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <PageTemplate
        title='Tv Shows'
        movies={movies}
        selectFavorite={addToFavorites}
      />
    );
  };
  export default Tv;