import useVideoContainer from "../hooks/useVideoContainer";
import VideoCard from "./VideoCard";

const MainVideoContainer = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  useVideoContainer();
  return (
    <div className="w-screen  h-screen flex justify-center items-center">
      <div className="flex h-screen w-screen/1 flex-wrap gap-4 justify-center mt-36 pb-20">
        {array.map(() => (
          <VideoCard />
        ))}
      </div>
    </div>
  );
};
export default MainVideoContainer;
