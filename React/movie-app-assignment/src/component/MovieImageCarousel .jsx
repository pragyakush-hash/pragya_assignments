import React, { useState } from "react";

const MovieImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () =>setCurrent((current + 1) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full max-w-lg mx-auto my-6">
      <img
        src={images[current]}
        alt={`Poster ${current + 1}`}
        className="w-full object-cover rounded-lg shadow"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-l-lg"
          >
            {"<"}
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-r-lg"
          >
            {">"}
          </button>
        </>
      )}
      <div className="flex justify-center mt-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 mx-1 rounded-full ${
              idx === current ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieImageCarousel;
