import useVideoContainer from "../hooks/useVideoContainer";
import VideoCard from "./VideoCard";

const MainVideoContainer = () => {
  const { videos } = useVideoContainer();
  console.log(videos, "videos");
  return (
    <div className="h-screen flex flex-wrap gap-4 justify-center overflow-y-auto">
      {videos?.map((video) => (
        <VideoCard key={video} items={video} />
      ))}
    </div>
  );
};
export default MainVideoContainer;
