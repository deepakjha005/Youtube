import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { USER_ICON } from "../utils.js/constants";
import Comments from "./Comments";
import LiveCommentsSection from "./LiveCommentsSection";

const WatchVideo = () => {
  const id = useParams();
  const videoContent = useSelector((store) => store.video?.videoList);
  const filteredContent = videoContent?.filter((item) => item?.id === id?.id);

  return (
    <div className="flex w-screen">
      <div className={"w-9/12 h-[800px]"}>
        <iframe
          src={
            "https://www.youtube.com/embed/" + id?.id + "?si=CTwv0_E_XMx2ZEz2"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={"w-full h-full rounded-2xl p-2"}
        ></iframe>
        <div className="w-full h-[100px] rounded-2xl  ml-2 p-2 ">
          <h1 className="text-2xl px-2">
            {filteredContent[0]?.snippet?.title ?? "Default title"}
          </h1>
          <div className="flex mt-2 items-center">
            <img src={USER_ICON} alt="channel_logo" className="h-9 w-9" />
            <h3>
              {filteredContent[0]?.snippet?.channelTitle + " " ??
                "default Channel Name"}
              ☑️
            </h3>
          </div>
        </div>
        <Comments videoId={id} />
      </div>
      <LiveCommentsSection />
    </div>
  );
};
export default WatchVideo;
