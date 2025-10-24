import React, { useEffect, useState } from "react";

const Movies = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDRjNmM3NDk0MTg4MjFjOWIzZjhkODY3NDgyODA4YiIsIm5iZiI6MTc2MTI4NzE4OC4yMzIsInN1YiI6IjY4ZmIxYzE0NDY2MTZkY2JhNDVkZGJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqOYjWzuH_8D8bOOS86ai6ghm8xeoTIzywq3UavBIkE",
              accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setApiData(data.results);
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching TMDB data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {apiData.map((item) => (
        <div
          key={item.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-5"
        >
          <img
            className="rounded-t-lg"
            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
            alt={item.title}
          />
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <p className="mb-3 text-gray-700 dark:text-gray-400">
              {item.overview.length > 100
                ? item.overview.slice(0, 100) + "..."
                : item.overview}
            </p>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
              Read more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
