import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Comments({ id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!id) return; 

    const fetchComments = async () => {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/youtube/v3/commentThreads`,
          {
            params: {
              part: "snippet",
              videoId: id,
              maxResults: 20,
              key: "AIzaSyCNwtciRgp55p-OgdZ_YQJOMeLZZx-GQh4",
            },
          }
        );

        console.log("COMMENTS DATA:", data);
        setComments(data?.items || []);
      } catch (error) {
        console.log("Comment Error:", error);
      }
    };
    console.log("Video ID in comments:", id)

    fetchComments();
  }, [id]);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Comments ({comments.length})
      </Typography>

      {comments.map((item) => {
        const comment = item.snippet.topLevelComment.snippet;

        return (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              gap: 2,
              mb: 3,
              alignItems: "flex-start",
            }}
          >
            <img
              src={comment.authorProfileImageUrl}
              alt="user"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />

            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                {comment.authorDisplayName}
              </Typography>

              <Typography sx={{ fontSize: "14px" }}>
                {comment.textDisplay}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
