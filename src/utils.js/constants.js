const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

if (!API_KEY) {
  console.warn(
    "Missing REACT_APP_YOUTUBE_API_KEY in .env file. Create a .env with REACT_APP_YOUTUBE_API_KEY=YOUR_KEY and restart the dev server."
  );
}

export const YOU_TUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" +
  API_KEY;
