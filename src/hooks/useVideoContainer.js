import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoList } from "../redux/slices/videoListSlice";
import { YOU_TUBE_VIDEOS_API } from "../utils.js/constants";

const useVideoContainer = () => {
  const videoList = useSelector((store) => store.video.videoList);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!videoList) fetchVideos();
  }, []);
  const fetchVideos = async () => {
    try {
      const data = await fetch(YOU_TUBE_VIDEOS_API);
      const json = await data.json();
      dispatch(setVideoList(json?.items));
    } catch (error) {}
  };
  return {
    videoList,
  };
};

export default useVideoContainer;
