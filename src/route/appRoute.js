import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SuggestionList from "../components/SuggestionList";
import WatchVideo from "../components/WatchVideo";
import ReactHooks from "../react-hooks/ReactHooks";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/browse/:id",
    element: <WatchVideo />,
  },
  {
    path: "/results",
    element: <SuggestionList />,
  },
  {
    path: "/hooks",
    element: <ReactHooks />,
  },
]);
export default appRoute;
