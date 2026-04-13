// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function useVideoDetail(videoId) {
//   const [video, setVideo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!videoId) return;

//     const API_KEY = "AIzaSyDrnvB-r8P5CUeulNt_he11cc2dPrfjKgM";

//     setLoading(true);
//     setError(null);

//     axios
//       .get("https://www.googleapis.com/youtube/v3/videos", {
//         params: {
//           part: "snippet,statistics",
//           id: videoId,
//           key:'AIzaSyDrnvB-r8P5CUeulNt_he11cc2dPrfjKgM',
//         },
//       })
//       .then((res) => setVideo(res.data.items[0]))
//       .catch((err) => setError(err.response || err))
//       .finally(() => setLoading(false));
//   }, [videoId]);

//   return { video, loading, error };
// }
