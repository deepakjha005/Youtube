import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { formatDuration } from "../utils.js/constants";

const SuggestionList = () => {
  const searchResultList = useSelector((store) => store.video?.suggestionList);
  const navigate = useNavigate();
  const handleWatchVideo = (id) => {
    console.log("called");
    navigate("/browse/" + id);
  };
  return (
    <div className="w-7/12 h-screen mx-auto">
      {searchResultList?.map((item) => {
        if (item?.id?.videoId) {
          return (
            <div
              className="p-2 m-2 flex cursor-pointer hover:bg-gray-200 rounded-md"
              onClick={() => handleWatchVideo(item?.id?.videoId)}
            >
              <div className="">
                <img
                  src={item?.snippet?.thumbnails?.high?.url}
                  alt="list-logo"
                  className="rounded-2xl"
                />
              </div>
              <div className="px-4 overflow-hidden break-words w-1/2">
                <h1 className=" text-xl line-clamp-2">
                  {item?.snippet?.description
                    ? item?.snippet?.description
                    : "Description is not available"}
                </h1>
                <h1 className="text-gray-500 text-sm mt-1">Views count</h1>
                <h1 className="mt-4 text-gray-500 text-md">
                  {item?.snippet?.channelTitle}
                </h1>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
export default SuggestionList;
