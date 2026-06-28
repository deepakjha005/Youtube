import { USER_ICON } from "../utils.js/constants";

const LiveCommentComponent = () => {
  // useEffect(() => {
  //   fetchLiveComment();
  // }, []);
  // const fetchLiveComment = async () => {
  //   const data = await fetch(YOU_TUBE_LIVE_CHAT_API);
  //   const json = await data.json();
  //   console.log(json, "json");
  // };
  return (
    <div className="py-2">
      <div className="flex justify-start items-center overflow-hidden break-words">
        <img
          src={USER_ICON}
          alt="logo"
          className="mx-3 w-8 h-8 rounded-full "
        />
        <h1 className="text-sm text-gray-500">username</h1>
        <h1 className="ml-4 line-clamp-1 text-md text-gray-700">
          commentcommenkjhsakjhskafjhkljhfkljhfsa
        </h1>
      </div>
    </div>
  );
};
export default LiveCommentComponent;
