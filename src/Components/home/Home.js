import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { GoDotFill } from "react-icons/go";
import useVideos from "../useVideo/useVideo";
import Loader from "../loader/Loader";
import Shorts from "../shorts/Shorts";
// import useVideos from "./useVideos"; // our custom hook

const MainDiv = styled("div")(() => ({
  width: "100%",
  maxWidth: "1250px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column", 
  gap: "30px",
  padding: "20px",
  boxSizing: "border-box",
  border: '1px solid red',
}));

export default function Home({ openDrawer, selectedCategory,searchTerm }) {
  const { videos, loading, error } = useVideos(selectedCategory, 50);
  const navigate = useNavigate();

  if (loading) return <Loader/>;
  if (error) return <Typography>Error loading videos</Typography>;
const filteredVideos = videos?.filter(item =>
  item?.snippet?.title?.toLowerCase().includes(searchTerm.toLowerCase())
);
if (!filteredVideos || filteredVideos.length === 0) {
  return <Typography>No videos Found</Typography>;
}
const shortsVideos = videos?.slice(0, 6)

    return (
    <Box sx={{ width: {xs:'auto',sm:'auto',md:'auto',lg:'1630px'}, margin: "0 auto"}}>
            <Shorts shortsVideos={shortsVideos} />

      <Grid container spacing={2}>
        {filteredVideos.map((item) => {
          const videoId = item.id;
          return (
            <Grid
              item
              key={videoId}
                xs={12}
                sm={6}
                md={3}
              sx={{width:{xs:"auto",sm:'auto',md:'auto',lg:'395px'}, display: "flex",flexDirection:{xs:'column',sm:'row',md:'row'}, justifyContent: 'center',alignItems:{xs:'center',sm:'center',md:'center',lg:'normal'}}}
              onClick={() => navigate(`/video/${videoId}`)}
            >
              <Card sx={{ width: {xs:'auto',sm:"350px",md:"395px",lg:'395px'}, cursor: "pointer", bgcolor: 'transparent', boxShadow: 0 }}>
                <CardContent sx={{ padding: '0' }}>
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    alt={item.snippet.title}
                    style={{ width: "100%", height: 200, borderRadius: '12px' }}
                  />
                  <Typography sx={{ mt: 1, fontSize: 15, fontWeight: 700 }}>
                    {item.snippet.title}
                  </Typography>
                  <Typography sx={{ color: 'gray', fontSize: '14px', fontFamily: 'Roboto,sans-serif' }}>
                    {item.snippet.channelTitle}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: 'auto', height: '30px', gap:"10px" }}>
                  
                       <Typography sx={{ color: 'gray', fontSize: '13px', fontFamily: 'Roboto,sans-serif' }}>
                      {Number(item?.statistics?.viewCount) >= 1000
                        ? `${Math.floor(item.statistics.viewCount / 1000)}K Views`
                        : `${item?.statistics?.viewCount} Views`}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ color: 'gray', fontFamily: 'Roboto,sans-serif', marginTop: '1px' }}>
                        <GoDotFill size={8} />
                      </Typography>
                      <Typography sx={{ color: 'gray', fontSize: '14px', fontFamily: 'Roboto,sans-serif' }}>
                        {new Date(item.snippet.publishedAt).toDateString()}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
