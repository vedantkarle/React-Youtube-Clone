import axios from "axios";

const KEY = "AIzaSyCZ6HuwO4dbTXBJwPgLDYv7t3pcaiESP3Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
