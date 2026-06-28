import { useState } from "react";
import LiveCommentComponent from "./LiveCommentComponent";

const LiveCommentsSection = () => {
  const array = [1, 2, 3, 4, 5, "", "", "", "", "", "", ""];
  const [showLiveChat, setShowLiveChat] = useState(false);
  const handleCloseLiveChat = () => {
    setShowLiveChat(!showLiveChat);
  };
  return showLiveChat ? (
    <div className=" mt-2 rounded-lg  w-[450px] mx-2 border-gray-400 border p-2 h-[790px] overflow-scroll">
      <div className="flex justify-between px-2">
        <h1 className="text-gray-500">Live Chat</h1>
        <h1
          className="h-8 w-8 hover:bg-gray-100 rounded-full text-center cursor-pointer text-gray-600 text-lg"
          onClick={handleCloseLiveChat}
        >
          x
        </h1>
      </div>
      {array.map(() => (
        <LiveCommentComponent />
      ))}
      {array.map(() => (
        <LiveCommentComponent />
      ))}
      {array.map(() => (
        <LiveCommentComponent />
      ))}
    </div>
  ) : (
    <div>
      <div className=" mt-2 rounded-lg  w-[450px] mx-2 border-gray-400 border p-2 h-16">
        <div className="flex justify-between px-2">
          <h1 className="text-gray-500">Live Chat</h1>
          <h1
            className="h-8 w-8 hover:bg-gray-100 rounded-full text-center cursor-pointer text-gray-600 text-lg"
            onClick={handleCloseLiveChat}
          >
            👀
          </h1>
        </div>
      </div>
    </div>
  );
};
export default LiveCommentsSection;
