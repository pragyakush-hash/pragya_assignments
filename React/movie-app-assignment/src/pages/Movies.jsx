import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movies/movieSlice";
import MovieCards from "../component/MovieCards";

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movie);
  // const [apiData, setApiData] = useState([]);

  useEffect(() => {
    dispatch(fetchMovies());

  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center text-white mt-10">🎬 All Popular Movies</h1>

    
    <div className="flex flex-row flex-wrap justify-center">
      {movies.map((item) => (
        <MovieCards {...item} key={item.id} />
      ))}
    </div>
    </div>
  );
};

export default Movies;
