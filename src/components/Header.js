import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHamburger } from "../redux/slices/appSlice";
import { searchCacheResults } from "../redux/slices/searchSuggestionSlice";
import { USER_ICON } from "../utils.js/constants";
import SearchSuggestion from "./SearchSuggestion";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestionList, setSuggestionList] = useState([]);
  const searchCache = useSelector((store) => store.search);
  const wrapperRef = useRef(null);

  const dispatch = useDispatch();
  const handleHamburgerClick = () => {
    dispatch(toggleHamburger());
  };

  useEffect(() => {
    // debouncing
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestionList(searchCache[searchQuery]);
      } else {
        fetchSearchSuggestionList();
      }
    }, [180]);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const fetchSearchSuggestionList = async () => {
    const searchList = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const data = await searchList.json();
    console.log(data, "datat");
    setSuggestionList(data[1]);
    dispatch(searchCacheResults({ [searchQuery]: data[1] }));
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestion(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
      <div ref={wrapperRef} className=" w-[650px]  items-center my-auto">
        <div className="flex justify-center items-center">
          <input
            placeholder="Search"
            className="rounded-l-full w-full h-10 placeholder-gray-400 px-5 border-gray-400 border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            // Removed onBlur to prevent unmounting suggestions before click; closing handled via outside-click listener
          />
          <button className="bg-gray-100 border-gray-200 p-2 border rounded-r-full hover:bg-gray-200">
            Search
          </button>
        </div>

        {showSuggestion && <SearchSuggestion data={suggestionList} />}
      </div>
      <div className=" flex justify-center items-center">
        <img
          src={USER_ICON}
          alt="user"
          className="h-12 w-15 rounded-e-full rounded-s-full"
        />
      </div>
    </div>
  );
};
export default Header;
