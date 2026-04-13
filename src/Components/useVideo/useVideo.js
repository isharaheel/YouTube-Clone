import { useState, useEffect } from "react";
import axios from "axios";

const categoryMap = {
  All: "",
  Music: 10,
  Gaming: 20,
  Sports: 17,
  News: 25,
};

export default function useVideos(selectedCategory, maxResults = 20) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = "AIzaSyCNwtciRgp55p-OgdZ_YQJOMeLZZx-GQh4"; 
    setLoading(true);
    setError(null);

    const params = {
      part: "snippet,statistics,contentDetails",
      chart: "mostPopular",
      maxResults,
      regionCode: "PK",
      key: 'AIzaSyCNwtciRgp55p-OgdZ_YQJOMeLZZx-GQh4',
    };

    if (selectedCategory && selectedCategory !== "All") {
      params.videoCategoryId = categoryMap[selectedCategory];
    }

    axios
      .get("https://www.googleapis.com/youtube/v3/videos", { params })
      .then((res) => setVideos(res.data.items))
      .catch((err) => setError(err.response || err))
      .finally(() => setLoading(false));
  }, [selectedCategory, maxResults]);

  return { videos, loading, error };
}
