import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAction } from "../redux/store";

const TileComponent = ({ title }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const resetStore = () => {
    // dispatch
    if (title === "Reset Store") {
      dispatch(resetAction());
      return;
    }
    if (title === "Hooks Concepts") {
      navigation("/hooks");
      return;
    }
    if (title === "Home") {
      navigation("/");
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
