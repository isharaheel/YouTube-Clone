import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GoDotFill } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function VidList() {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const API_KEY = "AIzaSyCNwtciRgp55p-OgdZ_YQJOMeLZZx-GQh4"; 

    axios
      .get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
          part: "snippet,statistics",
          chart: "mostPopular",
          maxResults: 20,
          regionCode: "PK",
          key: API_KEY,
        },
      })
      .then((res) => setVideos(res.data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box sx={{ display: "flex",flexDirection:{xs:'column',sm:'column',md:'column',lg:"row"}}}>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Grid container spacing={1}>
          {videos.map((item) => {
            const videoId = item.id;
        
            return (
              <Grid
                item
                key={videoId}
                xs={12}
                sm={6}
                md={1}
                sx={{ display: "flex", justifyContent: "center",alignItems:{xs:'center'},width:{xs:'90%',sm:'auto',md:"auto",lg:'100%'},margin:'auto' }}
                onClick={() => navigate(`/video/${videoId}`)}
              >
                <Card
                  sx={{
                    width: {xs:'auto',sm:'auto',md:"410px",lg:'410px'},
                    height: "auto",
                    border: "transparent",
                    cursor: "pointer",
                    bgcolor: "transparent",
                    boxShadow: 0,
                   
                  }}
                >
                  <CardContent sx={{ padding: "0", height: {xs:'auto',sm:'auto',md:'auto',lg:'80px'} }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Box sx={{ display: "flex",flexDirection:{xs:'column',sm:'column',md:'column',lg:'row'}, gap: "10px" }}>
                        <Box>
                        <Box
  component="img"
  src={item?.snippet?.thumbnails?.medium?.url}
  alt={item?.snippet?.title}
  sx={{
    width: { xs: 370, sm: 340, md: 410,lg:165 },
    height: {xs:200,sm:350,md:250,lg:100},
    borderRadius: {xs:'10px',sm:"13px",md:"10px",lg:'13px'},
    objectFit: "cover",
  }}
/>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography sx={{ mt: 1, fontSize: 12 }}>
                            {item?.snippet?.title}
                          </Typography>

                          <Typography
                            sx={{ color: "gray", fontSize: "14px", fontFamily: "Roboto,sans-serif" }}
                          >
                            {item?.snippet?.channelTitle}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              width: "auto",
                              height: "30px",
                              gap: "10px",
                            }}
                          >
                           
                             <Typography sx={{ color: 'gray', fontSize: '13px', fontFamily: 'Roboto,sans-serif' }}>
                                                  {Number(item?.statistics?.viewCount) >= 1000
                                                    ? `${Math.floor(item.statistics.viewCount / 1000)}K Views`
                                                    : `${item?.statistics?.viewCount} Views`}
                                                </Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography
                                sx={{
                                  color: "gray",
                                  fontFamily: "Roboto,sans-serif",
                                  marginTop: "1px",
                                }}
                              >
                                <GoDotFill size={8} />
                              </Typography>
                              <Typography
                                sx={{ color: "gray", fontSize: "14px", fontFamily: "Roboto,sans-serif" }}
                              >
                                {new Date(item.snippet.publishedAt).toDateString()}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{
    display: { xs: "none", sm: "none",md:'none',lg:'block' } 
  }}
>
                        <BsThreeDotsVertical />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
