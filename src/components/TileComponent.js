import { useDispatch } from "react-redux";
import { resetAction } from "../redux/store";

const TileComponent = ({ title }) => {
  const dispatch = useDispatch();

  const resetStore = () => {
    // dispatch
    if (title === "Reset Store") {
      console.log("clicked");
      dispatch(resetAction());
      return;
    }
  };
  return (
    <>
      <div
        className="p-3 hover:bg-gray-200 cursor-pointer rounded-lg"
        onClick={resetStore}
      >
        <h1 className="text-md pl-4"> {title}</h1>
      </div>
    </>
  );
};
export default TileComponent;
