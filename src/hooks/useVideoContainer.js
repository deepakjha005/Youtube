import { useEffect } from "react";
import { YOU_TUBE_VIDEOS_API } from "../utils.js/constants";

const useVideoContainer = () => {
  useEffect(() => {
    fetchVideos();
  }, []);
};
const fetchVideos = async () => {
  try {
    const data = await fetch(YOU_TUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json, "response");
  } catch (error) {
    console.log(error, "error");
  }
};
export default useVideoContainer;
