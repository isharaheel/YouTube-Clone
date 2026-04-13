import * as React from 'react';
import { Avatar, Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaRegBell } from "react-icons/fa6";
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PiBellRinging } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import { GoBellSlash } from "react-icons/go";
import { LuUserRoundX } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatBold } from "react-icons/pi";
import { SiGooglegemini } from "react-icons/si";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import VidList from '../vidList/VidList';
import Comments from '../comments/Comments';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        ...theme.applyStyles('dark', {
          color: 'inherit',
        }),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function VideoDetail({openDrawer}) {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${id}&key=AIzaSyCNwtciRgp55p-OgdZ_YQJOMeLZZx-GQh4`
      )
      .then((res) => {
        if (res.data.items.length > 0) {
          setVideo(res.data.items[0]);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!video) return <Typography>Loading...</Typography>;
  
  return (
    <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'column',lg:'row'},gap:'10px', width:{xs:'auto',sm:'auto',md:'auto',lg:'1650px'},margin: "0 auto" }}>
    <Box sx={{ width: {xs:'auto',sm:'auto',md:'auto',lg:"1220px"},display:'flex',flexDirection:'column',gap:'20px' }}>

      <Box
        sx={{
          width: "100%",
          height: { xs: "250px", sm: "400px", md: "650px" },
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={video.title}
          frameBorder="0"
          allowFullScreen
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </Box>
        <Typography sx={{ fontSize: 20, fontWeight: 700, mb: 2 }}>
        {video?.snippet?.title}
      </Typography>

      <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},width:'100%',height:'auto',alignItems:{xs:'normal',sm:'center',md:'center'},justifyContent:'space-between',gap:{xs:'18px',sm:'18px',md:'0'}}}>
        <Box sx={{width:{xs:'auto',sm:'50%',md:'auto'},height:'100%',display:'flex',alignItems:'center',gap:'15px'}}>
          <Avatar alt="Travis Howard" src="/images/avatar4.jpg" sx={{width:50,height:50}}/>
          <Box sx={{display:'flex',flexDirection:'column',height:'38px'}}>
          <Typography sx={{fontWeight:{xs:0,sm:0,md:600},fontSize:{xs:"10px",sm:'auto',md:'17px'}}}>{video?.snippet?.channelTitle}</Typography>
          <Typography sx={{color:'gray',fontSize:"13px"}}>{video?.statistics?.viewCount
}Views</Typography>
          </Box>
           <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{background:'#e0dddd',color:'black',borderRadius:'13px'}}
      >
        <FaRegBell size={20} color='black'/>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'demo-customized-button',
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple sx={{gap:'10px'}}>
          <PiBellRinging />
          All
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple sx={{gap:'10px'}}>
          <GoBell />
          Personalized
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple sx={{gap:'10px'}}>
          <GoBellSlash />
          None
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple sx={{gap:'10px'}}>
          <LuUserRoundX />
          UnSubscribed
        </MenuItem>
      </StyledMenu>
    </div>
      </Box>
      <Box sx={{display:'flex',gap:'10px',alignItems:'center',width:'auto'}}>

      <Box sx={{color:'black',background:'rgb(224,221,221)',height:'35px',width:{xs:'auto',sm:'auto',md:'110px'},borderRadius:'17px',display:'flex',gap:"15px",alignItems:"center",justifyContent:'center'}}>
      <Box sx={{display:'flex',gap:'10px'}}>
        <AiOutlineLike size={20}/>
<Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>
  {Number(video?.statistics?.likeCount) >= 1000
    ? `${Math.floor(video.statistics.likeCount / 1000)}K `
    : `${video?.statistics?.likeCount} `}
</Typography>
<Divider orientation="vertical"
      flexItem sx={{color:"black",background:'black'}}/>
      <AiOutlineDislike size={20}/>
      </Box>  
      </Box>
      <Box sx={{width:'100px',height:'35px',borderRadius:'17px',display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',background:'rgb(224,221,221)'}}>
        <PiShareFatBold size={20}/>
        <Typography sx={{fontSize:'14px'}}>Share</Typography>
      </Box>
      <Box sx={{width:'90px',height:'35px',borderRadius:'17px',display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',background:'rgb(224,221,221)'}}>
      <SiGooglegemini size={20}/>
      <Typography sx={{fontSize:'14px'}}>Ask</Typography>
      </Box>
      <Box sx={{width:{xs:'auto',sm:'auto',md:'130px'},height:'35px',borderRadius:'17px',display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',background:'rgb(224,221,221)'}}>
      <MdOutlineDoNotDisturbAlt size={20}/>
      <Typography sx={{fontSize:'14px'}}>Remove ads</Typography>
      </Box>
      </Box>

      </Box>



      <Box sx={{width:{xs:'auto',sm:'auto',md:'98%'},height:'auto',background:'rgb(224,221,221)',borderRadius:'10px',padding:'10px'}}>
        <Box sx={{display:'flex',gap:'10px',alignItems:'center'}}>
        <Typography sx={{ fontSize: '14px',color:'black',fontWeight:'bold' }}>
  {Number(video?.statistics?.viewCount) >= 1000
    ? `${Math.floor(video.statistics.viewCount / 1000)}K Views`
    : `${video?.statistics?.viewCount} Views`}
</Typography>
<Typography sx={{ fontSize: '14px',color:'black',fontWeight:'bold' }}>
  {video?.snippet?.publishedAt
    ? new Date(video.snippet.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : ''}
</Typography>


        </Box>
        <Divider sx={{marginTop:'10px',marginBottom:'10px'}}/>
        <Typography sx={{fontSize:'13px',marginLeft:0,padding:0}}>
  {video?.snippet?.description || 'No description available'}
</Typography>
      </Box>
      <Box>
        <Comments/>
      </Box>
    </Box>
    
    <Box sx={{display:'flex',flexDirection:'column',gap:'10px',width:{xs:'auto',sm:'auto',md:'auto',lg:'420px'},height:'auto'}}>
    <VidList/>
    </Box>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </Box>
  );
}