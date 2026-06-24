import { useEffect, useState } from "react";
import { YOU_TUBE_VIDEOS_API } from "../utils.js/constants";

const useVideoContainer = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    try {
      const data = await fetch(YOU_TUBE_VIDEOS_API);
      const json = await data.json();

      setVideos(json?.items);
    } catch (error) {
      console.log(error, "error");
    }
  };
  return {
    videos,
  };
};

export default useVideoContainer;
