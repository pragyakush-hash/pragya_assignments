import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <div>
        <h1 className="">{count}</h1>
      </div>
      <div>
        <button
          className={`${
            count === 100
              ? `bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed`
              : `bg-blue-500 hover:bg-blue-700 text-white`
          } font-bold py-2 px-4 ml-2 rounded-full `}
          onClick={() => setCount((prev) => prev + 1)}
          disabled={count === 100}
        >
          Increase
        </button>
        <button
          className={`${
            count === 0
              ? `bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed`
              : `bg-blue-500 hover:bg-blue-700 text-white`
          } font-bold py-2 px-4 ml-2 rounded-full `}
          onClick={() => setCount((prev) => prev - 1)}
          disabled={count === 0}
        >
          Decrease
        </button>
        <button
          className={`${
            count >= 100 - 1
              ? `bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed`
              : `bg-blue-500 hover:bg-blue-700 text-white`
          } font-bold py-2 px-4 ml-2 rounded-full `}
          onClick={() => setCount((prev) => prev + 2)}
          disabled={count >= 100 - 1}
        >
          Increase By 2
        </button>

        <button
          className={`${
            count >= 100 - 4
              ? `bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed`
              : `bg-blue-500 hover:bg-blue-700 text-white`
          } font-bold py-2 px-4 ml-2 rounded-full `}
          onClick={() => setCount((prev) => prev + 5)}
          disabled={count >= 100 - 4}
        >
          Increase By 5
        </button>
        <button
          className={`${
            count >= 100 - 9
              ? `bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed`
              : `bg-blue-500 hover:bg-blue-700 text-white`
          } font-bold py-2 px-4 ml-2 rounded-full `}
          onClick={() => setCount((prev) => prev + 10)}
          disabled={count >= 100 - 9}
        >
          Increase By 10
        </button>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-full mt-5"
          onClick={() => setCount(0)}
        >
          Reset By 0
        </button>
      </div>
    </div>
  );
};

export default App;
