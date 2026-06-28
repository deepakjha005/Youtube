import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SuggestionList from "../components/SuggestionList";
import WatchVideo from "../components/WatchVideo";

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
]);
export default appRoute;
