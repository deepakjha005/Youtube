import { useDispatch } from "react-redux";
import { toggleHamburger } from "../redux/slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleHamburgerClick = () => {
    dispatch(toggleHamburger());
  };

  return (
    <div className="flex justify-between px-4 p-2  w-screen h-28 ">
      <div className="flex justify-center items-center">
        <div className=" w-16" onClick={handleHamburgerClick}>
          <img
            src="/hamburger_.png"
            alt="hamburger"
            className="w-24 h-12 cursor-pointer"
          />
        </div>
        <img src="/youtube_logo.png" alt="logo" className="w-24 h-12" />
      </div>
      <div className="flex w-[50%]  justify-center items-center">
        <input
          placeholder="Search"
          className="rounded-l-full w-[60%] h-10 placeholder-gray-400 px-5 border-gray-400 border"
        />
        <button className="bg-gray-100 border-gray-200 p-2 border rounded-r-full hover:bg-gray-200">
          Search
        </button>
      </div>
      <div className=" flex justify-center items-center">
        <img
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          alt="user"
          className="h-12 w-15 rounded-e-full rounded-s-full"
        />
      </div>
    </div>
  );
};
export default Header;
