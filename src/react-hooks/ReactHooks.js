import { CallbackHook } from "./CallbackHook";
import { MemoHook } from "./MemoHook";
import { RefHook } from "./RefHook";

const ReactHooks = () => {
  return (
    <div className="flex w-screen h-screen justify-evenly items-center">
      <RefHook />
      <MemoHook />
      <CallbackHook />
    </div>
  );
};
export default ReactHooks;
