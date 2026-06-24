import { useSelector } from "react-redux";
import Header from "./components/Header";
import MainVideoContainer from "./components/MainVideoContainer";
import SideBar from "./components/SideBar";

function App() {
  const showSideBar = useSelector((store) => store.app.showHamburger);

  return (
    <div className="w-screen bg-white h-screen text-black flex-1 overflow-x-hidden">
      <Header />
      <div className="flex justify-start overflow-hidden h-[calc(100vh-56px)]">
        {showSideBar && <SideBar />}
        <div className="flex-1 overflow-y-auto">
          <MainVideoContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
