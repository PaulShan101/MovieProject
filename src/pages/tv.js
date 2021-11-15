import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTvShows, getUpcomingMovies } from "../api/tmdb-api";

const Tv = (props) => {
    const [tv, setTv] = useState([]);
    
    
  
   
  
    useEffect(() => {
      getTvShows().then(tv => {
        setTv(tv);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <PageTemplate
        title='Tv Shows'
        tv={tv}
        
      />
    );
  };
  export default Tv;