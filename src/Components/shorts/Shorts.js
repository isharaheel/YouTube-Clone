import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Shorts({ shortsVideos }) {
  const navigate = useNavigate();

  if (!shortsVideos || shortsVideos.length === 0)
    return <Typography sx={{ ml: 2 }}>No Shorts Found</Typography>;

  return (
    <Box sx={{ p: 2,marginBottom:'20px', display:{xs:'none',sm:'none',md:'none',lg:"block"}}}>
      <Typography variant="h6" sx={{ mb: 1, ml: 1 }}>
        Shorts
      </Typography>
      <Box sx={{ display: "flex", overflowX: "auto", gap: 2 }}>
        {shortsVideos.map((item) => (
          <Card
            key={item.id}
            sx={{ width: 270, cursor: "pointer",borderRadius:'10px',border:'1px solid lightgray' }}
            onClick={() => navigate(`/video/${item.id}`)}
          >
            <CardContent sx={{ padding: 0 }}>
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
                style={{ width: "100%", height: 350, borderRadius: 12 }}
              />
              <Typography sx={{ fontSize: 14, mt: 1, px: 1 }}>
                {item.snippet.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}