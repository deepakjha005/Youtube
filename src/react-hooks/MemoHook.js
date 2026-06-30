import { useMemo, useState } from "react";

export const MemoHook = () => {
  const [count, setCount] = useState(0);
  console.log("rendering");

  const number = useMemo(heavyCalculation, []);

  function heavyCalculation() {
    console.log("called heavy calculation");
    for (let i = 0; i < 100000000; i++) {}
    return 2999;
  }
  return (
    <div className="h-1/2 w-1/4 border border-gray-300  justify-center ">
      <h1 className="ml-48">count: {count}</h1>
      <h1 className="ml-48">heavyNumber: {number}</h1>
      <button
        className="p-2 m-2 bg-green-300 text-white rounded-md ml-44 mt-32"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase
      </button>
    </div>
  );
};

// when to use

/**
 * Sorting
 * Filtering
 * Large arrays
 * Heavy loops
 * Complex calculations
 * API response transformations
 */
