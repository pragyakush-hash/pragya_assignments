import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCards = ({id, title, backdrop_path, overview }) => {
    const navigate = useNavigate()

    const handleDetails = ()=>{
        navigate (`/moviedetails/${id}`)

    }
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-5" onClick={handleDetails}>
        <img
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
        />
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 text-gray-700 dark:text-gray-400">
            {overview.length > 100 ? overview.slice(0, 100) + "..." : overview}
          </p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800" onClick={handleDetails}>
            Movie Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
