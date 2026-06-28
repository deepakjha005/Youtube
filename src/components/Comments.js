import { useEffect, useState } from "react";
import { API_KEY } from "../utils.js/constants";

const Comments = ({ videoId }) => {
  const [commentsData, setCommentsData] = useState([]);
  useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    console.log(videoId, "video");
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId?.id}&maxResults=20&key=${API_KEY}`
    );

    const data = await response.json();
    setCommentsData(data?.items);
  };
  return (
    <div className="p-2 m-2  h-auto rounded-r-lg  mx-3 ">
      <h1 className="text-xl font-bold"> {commentsData?.length} Comments</h1>
      {commentsData &&
        commentsData?.map((item) => (
          <div className=" flex items-center mt-2 px-2" key={item?.id}>
            <img
              src={
                item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
              }
              alt="user-logo"
              className="w-8 h-8 rounded-full "
            />
            <div className="px-2">
              <h1 className="text-sm">
                {item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
              </h1>
              <h5 className="text-md">
                {item?.snippet?.topLevelComment?.snippet?.textOriginal}
              </h5>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Comments;
