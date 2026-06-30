import React, { useCallback, useState } from "react";

export const CallbackHook = () => {
  const [count, setCount] = useState(0);
  const [renderCallback, setRenderCallback] = useState(0);
  const handleClick = useCallback(() => {
    console.log("callled ", renderCallback);
  }, [renderCallback]);
  return (
    <div className="h-1/2 w-1/4 border border-gray-300  justify-center ">
      <h1 className="ml-48">count: {count}</h1>
      <h1 className="ml-48">renderCallback: {renderCallback}</h1>
      <div className="flex  justify-center mt-20">
        <button
          className="p-2 m-2 bg-green-300 text-white rounded-md "
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increase
        </button>
        <button
          className="p-2 m-2 bg-green-300 text-white rounded-md "
          onClick={() => setRenderCallback((prev) => prev + 1)}
        >
          RenderCallBack
        </button>
      </div>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export const ChildComponent = React.memo(({ handleClick }) => {
  console.log("child rendering ....");
  return (
    <div className="w-full h-16 bg-gray-200 flex items-center justify-center">
      <button
        className="p-2 m-2 bg-green-300 text-white rounded-md "
        onClick={handleClick}
      >
        ChildButton
      </button>
    </div>
  );
});
