import axios from "axios";
const KEY = "AIzaSyCiZbQgW_osNuaQNxXcFwk_3yuo6_kL7dc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
