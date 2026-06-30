import { useRef, useState } from "react";

export const RefHook = () => {
  const [increaseCount, setIncreaseCount] = useState(0);
  const refValue = useRef(0);
  let newValue = 0;
  const handleOnClick = () => {
    setIncreaseCount((prev) => prev + 1);
  };
  const increaseLetVariable = () => {
    newValue = newValue + 1;
    console.log(newValue, "new let");
  };
  const increaseRefVariable = () => {
    refValue.current++;
    console.log(refValue.current, "new ref");
  };
  console.log("rendering ...");

  return (
    <div className="h-1/2 w-1/4 border border-gray-300  justify-center ">
      <h1 className="ml-48">count:{increaseCount}</h1>
      <h1 className="ml-48">Let Value: {newValue}</h1>
      <h1 className="ml-48">refValue: {refValue.current}</h1>
      <div className="flex bg-gray-300 justify-center mt-20">
        <button
          className="p-2 m-2 bg-green-300 text-white rounded-md  "
          onClick={handleOnClick}
        >
          Increase
        </button>
        <button
          className="p-2 m-2 bg-green-300 text-white rounded-md "
          onClick={increaseLetVariable}
        >
          Increase Let
        </button>
        <button
          className="p-2 m-2 bg-green-300 text-white rounded-md "
          onClick={increaseRefVariable}
        >
          Increase Ref
        </button>
      </div>
    </div>
  );
};

/**
 * UseRef
 *
 * Stores mutable values
 * No rerender
 * Keeps same object
 * Has current property
 * Can store anything
 * Mostly DOM + previous values
 */
