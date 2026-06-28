import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import img from "../assets/search.png";
import { setSuggestionVideoList } from "../redux/slices/videoListSlice";
import { API_KEY } from "../utils.js/constants";

const SearchSuggestion = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSuggestionClick = async (query = "react tutorial") => {
    console.log("clicked", query);
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(
        query
      )}&type=video&key=${API_KEY}`
    );
    const json = await res.json();
    dispatch(setSuggestionVideoList(json?.items));
    navigate("./results");
  };

  return (
    <div className="absolute w-[582px] self-center z-40 top-[5rem] border-gray-400 shadow-lg rounded-lg bg-white">
      {data?.map((title) => (
        <div
          className="flex  items-center hover:bg-gray-100 cursor-pointer"
          key={title}
          onClick={() => handleSuggestionClick(title)}
        >
          <img src={img} alt="logo" className="w-8 h-8" />
          <h1 className="  text-lg">{title}</h1>
        </div>
      ))}
    </div>
  );
};
export default SearchSuggestion;
