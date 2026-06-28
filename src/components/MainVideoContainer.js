import useVideoContainer from "../hooks/useVideoContainer";
import VideoCard from "./VideoCard";

const MainVideoContainer = () => {
  const { videoList } = useVideoContainer();
  return (
    <div className="h-screen flex flex-wrap gap-4 justify-center overflow-y-auto">
      {videoList?.map((video) => (
        <VideoCard key={video?.id} items={video} />
      ))}
    </div>
  );
};
export default MainVideoContainer;
