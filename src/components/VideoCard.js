import { formatDuration, formatViews } from "../utils.js/constants";

const VideoCard = ({ items }) => {
  const { thumbnails, channelTitle, title } = items?.snippet;
  const { statistics, contentDetails } = items;

  return (
    <div className="hover:bg-red-50 cursor-pointer rounded-b-lg ">
      <div className="relative">
        <img
          src={thumbnails?.medium?.url}
          alt="thumbnail"
          className="rounded-lg shadow-lg"
        />
        <h1 className="absolute text-white bottom-0 right-0 mr-2 mb-1 text-xs bg-black">
          {formatDuration(contentDetails?.duration ?? "")}
        </h1>
      </div>
      <div className="pt-1 w-[320px] overflow-hidden break-words">
        <h1 className="text-xl line-clamp-2">{title}</h1>
        <h1 className="text-gray-500 text-sm clamp-2">{channelTitle}</h1>
        <h1 className="text-gray-500 text-sm">
          {formatViews(statistics?.viewCount ?? "") + " views"}
        </h1>
      </div>
    </div>
  );
};
export default VideoCard;
