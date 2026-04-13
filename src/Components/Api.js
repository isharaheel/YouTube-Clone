import axios from "axios";

// Environment variables se values uthayi ja rahi hain
const BASE_URL = process.env.REACT_APP_YOUTUBE_BASE_URL;
console.log("My API Key is:", process.env.REACT_APP_YOUTUBE_API_KEY);
export const youtubeApi = (url, params) => {
  return axios.get(`${BASE_URL}/${url}`, {
    params: {
      ...params,
      key: process.env.REACT_APP_YOUTUBE_API_KEY, // Yahan key ki jagah variable aa gaya
    },
  });
};