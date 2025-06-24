import React, { useState, useMemo } from 'react';

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const squareNumber = useMemo(() => {
    console.log("this is our function working");
    return number * number;
  }, [number]);

  const themeClass = dark
    ? 'bg-black text-white'
    : 'bg-white text-black';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-center text-blue-700">useMemo Example</h2>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter a number"
        />

        <button
          onClick={() => setDark(!dark)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Toggle Theme
        </button>

        <div className={`p-4 rounded text-center border ${themeClass}`}>
          <h2 className="text-xl font-bold">Squared Number: {squareNumber}</h2>
        </div>
      </div>
    </div>
  );
};

export default UseMemoExample;
