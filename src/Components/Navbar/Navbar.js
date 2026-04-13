import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import TranslateIcon from '@mui/icons-material/Translate';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ExploreIcon from '@mui/icons-material/Explore';
import { TbDeviceAnalytics } from "react-icons/tb";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { BiTachometer } from "react-icons/bi";
import { TbUserShare } from "react-icons/tb";
import { CiShoppingBasket } from "react-icons/ci";
import { TbUserCheck } from "react-icons/tb";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Avatar, Chip, FormControl, OutlinedInput, Select, Stack,Switch,
  TextField, } from '@mui/material';
// import { useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { MdOutlineStorefront } from "react-icons/md";
import { PiMailboxLight } from "react-icons/pi";
import { FaRegPaperPlane } from "react-icons/fa";
import { PiHeadphones } from "react-icons/pi";
import { PiChats } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { CiImageOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { RiContactsBookLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineSettings } from "react-icons/md";

// 

import { IoMdAdd } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { TiMicrophoneOutline } from "react-icons/ti";
import { AiOutlineHome  } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiNewspaperClipping } from "react-icons/pi";
import { CiTrophy } from "react-icons/ci";
import { TbBrandBlogger } from "react-icons/tb";
import { FiTv } from "react-icons/fi";
import { useState } from 'react';

const drawerWidth = 240;
const miniWidth = 60;

const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: '10px',
  bgcolor: "background.default",
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  height: '50px',
  padding: '0 10px',
  transition: '0.3s',
  width:'800px',
  border:'.5px solid lightgray',
  '&:hover': { border: '1px solid black' },
}));

const SearchIconWrapper = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: 'inherit',
  flex: 1,
  height: '100%',
  width:'400px'
}));

const ProfileBar = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
  bgcolor: "background.default",
  borderRadius: '24px',
  height: '50px',
  padding: '0 5px',
}));
export default function Navbar({children , setSelectedCategory,selectedCategory,searchTerm, setSearchTerm}){
     const [openDrawer, setOpenDrawer] = React.useState(false); 
  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = mobileDrawerOpen ? 'hidden' : 'auto';
  }, [mobileDrawerOpen]);


  
 const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const [age, setAge] = React.useState(10); 

  const handleChange = (event) => {
    setAge(event.target.value);
  };
//  const [query, setQuery] = useState('')


//   const handleSearch = () => {
//     if (onSearch) {
//       onSearch(query); 
//     }
//   };

    return(
         <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1300,
          // background: 'white',
          // color: 'black',
          bgcolor: "background.paper",
          color: "text.primary",
          height: '80px',
          justifyContent: 'center',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>


            <IconButton
              size="large"
              onClick={() => {
                if (window.innerWidth >= 900) {
                  setOpenDrawer(!openDrawer);
                } else {
                  setMobileDrawerOpen(true);
                }
              }}
              sx={{
                
                padding: '6px',
                borderRadius: '7px',
                fontSize: '20px',
                marginLeft:'-10px',
                // '&:hover': { color: 'white', backgroundColor: 'purple' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box>
              <Link to="/">
  <img
    src="images/ytLogo.png"
    width={120}
    style={{ marginLeft: "-10px", cursor: "pointer" }}
    alt="YouTube Logo"
  />
</Link>
            </Box>

          </Box>
          
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' },border:'1px solid lightgrey', color: 'rgb(114,114,114)', backgroundColor: 'rgb(248,248,248)' }}
              onClick={() => setMobileSearchOpen(true)}
            >
              <SearchIcon />
            </IconButton>
            <Box sx={{display:'flex',width:'700px',justifyContent:'space-between',alignItems:'center'}}>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', width:'640px',border:'1px solid lightgray',height:"40px",borderRadius:'20px',justifyContent:'space-between' }}>
                <Box sx={{width:'91%',borderTopLeftRadius:'30px',borderBottomLeftRadius:'30px',height:'100%'}}>
                <form noValidate autoComplete="off">
                <FormControl sx={{ width: '582px'}}>
   <OutlinedInput placeholder="Search"
  type="text"
      // placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
   sx={{ height: '40.5px',borderTopLeftRadius: '30px',
        borderBottomLeftRadius: '30px',
        '& .MuiOutlinedInput-notchedOutline': {
          borderRadius: '30px 0 0 30px', // ensures outline respects radius
        }}}/>
                </FormControl>
                </form>

                </Box>
                <Box sx={{width:'9%',height:'100%',borderTopRightRadius:'30px',borderBottomRightRadius:'30px',textAlign:'center',background:'rgb(248,248,248)'}}>
                    <IoSearch size={25} style={{marginTop:'7px'}}/>

                </Box>
            
            </Box>

            <IconButton sx={{padding:'7px',borderRadius:'100%',background:'rgb(248,248,248)',border:'1px solid lightgrey'}}>
                <TiMicrophoneOutline size={26}/>

            </IconButton>
            </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            <Button  sx={{
                color: 'black',
                backgroundColor: 'rgb(242,242,242)',
                // padding: '6px',
                borderRadius: '7px',
                // fontSize: '20px',
                marginLeft:'20px',
                textTransform:'none',
                textAlign:'center',
                fontSize:'12px',
                borderRadius:'30px',
                width:'100px',
                height:"40px"
                
                // '&:hover': { color: 'white', backgroundColor: 'purple' },
              }}>
               <IoMdAdd size={20}/>            
                
                <Typography sx={{fontSize:'17px'}}>Create</Typography>
              
            </Button>
            <IconButton>
               <FaRegBell size={25}/>
            </IconButton>
            <iconButton>
                 <Avatar alt="Remy Sharp" src="images/avatar.jpg" />
            </iconButton>
            
      
           

{/*  */}

 {/* <div>
      <Button
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        disableRipple
  disableElevation

      >
        <IconButton  sx={{
                fontSize: '20px',
                // marginLeft:'20px',
                  
    color: open ? 'rgb(227,242,253)' : 'rgb(30,136,229)',
    backgroundColor: open ? 'rgb(30,136,229)' : 'rgb(227,242,253)',
    padding: '6px',
    borderRadius: '7px',
    transition: '0.2s',
    '&:hover': {
      color: 'rgb(227,242,253)',
      backgroundColor: 'rgb(30,136,229)',
    },

              }}>
            <TranslateIcon

/></IconButton>
      </Button>
      <Menu
        id="fade-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'fade-button',
          },
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
       <MenuItem
   onClick={() => i18n.changeLanguage('en')}
  selected={i18n.language === 'en'}
  sx={{
    fontWeight: i18n.language === 'en' ? 'bold' : 'normal',
    '&.Mui-selected': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&:hover': {
      backgroundColor: 'rgb(237,231,246)',
    },
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
    English
    <Typography sx={{ color: 'gray', ml: 1,fontSize:'13px' }} variant="body2">(UK)</Typography>
  </Box>
</MenuItem>

<MenuItem
  onClick={() => i18n.changeLanguage('fr')}
  selected={i18n.language === 'fr'}
  sx={{
    fontWeight: i18n.language === 'fr' ? 'bold' : 'normal',
    '&.Mui-selected': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&:hover': {
      backgroundColor: 'rgb(237,231,246)',
    },
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
    française
    <Typography sx={{ color: 'gray', ml: 1,fontSize:'13px'  }} variant="body2">(French)</Typography>
  </Box>
</MenuItem>

<MenuItem
  onClick={() => i18n.changeLanguage('ro')}
  selected={i18n.language === 'ro'}
  sx={{
    fontWeight: i18n.language === 'ro' ? 'bold' : 'normal',
    '&.Mui-selected': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&:hover': {
      backgroundColor: 'rgb(237,231,246)',
    },
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
    Romana
    <Typography sx={{ color: 'gray', ml: 1 ,fontSize:'13px' }} variant="body2">(Romanian)</Typography>
  </Box>
</MenuItem>

<MenuItem
   onClick={() => i18n.changeLanguage('zh')}
  selected={i18n.language === 'zh'}
  sx={{
    fontWeight: i18n.language === 'zh' ? 'bold' : 'normal',
    '&.Mui-selected': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'rgb(237,231,246) !important',
    },
    '&:hover': {
      backgroundColor: 'rgb(237,231,246)',
    },
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
    中国人
    <Typography sx={{ color: 'gray', ml: 1,fontSize:'13px'  }} variant="body2">(Chinese)</Typography>
  </Box>
</MenuItem>

      </Menu>
    </div> */}


{/* <PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <IconButton  sx={{
                color: popupState.isOpen ? 'rgb(255,248,225)' : 'rgb(255,205,55)',
          backgroundColor: popupState.isOpen ? 'rgb(255,205,55)' : 'rgb(255,248,225)',
         
                padding: '6px',
                borderRadius: '7px',
                fontSize: '20px',
                // marginLeft:'20px',
             '&:hover': {
            color: 'rgb(255,248,225)',
            backgroundColor: 'rgb(255,205,55)',
          },
              }}>
        <NotificationsNoneIcon
        {...bindTrigger(popupState)}
       
      />
      </IconButton>
      

      <Menu
        {...bindMenu(popupState)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
         PaperProps={{
    sx: {
      width: "18%",
      height: "800px",
      marginTop:'25px'
    },
  }}
      >

        <MenuItem onClick={popupState.close} sx={{background:'none',marginBottom:'7px'}}>
        <Box sx={{width:'100%',display:'flex',justifyContent:"space-between",height:'auto',alignItems:"center"}}>
         
            <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>All Notifications</Typography>
             <Stack direction="row" spacing={1}>
      <Chip label="01" sx={{background:'rgb(254,192,7)',color:'rgb(255,246,220)'}}/>
    </Stack>
    <Typography sx={{textDecoration:'underline',color:'rgb(30,135,228)',fontSize:'13px'}}>Mark as all read</Typography>

        </Box>
        
        </MenuItem>
        <MenuItem sx={{background:'none',marginBottom:'7px'}}>
     
       <Box sx={{ width: '100%' }}>
  <FormControl fullWidth>
    <Select
      fullWidth
      value={age}
      onChange={handleChange}
    >
      <MenuItem value={10}>All Notifications</MenuItem>
      <MenuItem value={20}>New</MenuItem>
      <MenuItem value={30}>Unread</MenuItem>
      <MenuItem value={40}>Other</MenuItem>
    </Select>
  </FormControl>

 
</Box>

        
        </MenuItem>
        <Divider mb={0}/>
        <MenuItem sx={{background:'none'}}>
        
        <Box sx={{width:'100%',height:'120px',display:'flex',justifyContent:'space-between'}}>
          <Box sx={{width:'25%'}}>
            <Avatar alt="Remy Sharp" src="./images/profile.svg" sx={{marginLeft:'20px'}}/>
          </Box>
          <Box sx={{width:'72%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Box sx={{width:'100%',height:'30px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'14px'}}>John Doe</Typography>
              <Typography sx={{fontSize:"12px",color:'gray'}}>2 min ago</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
              <Typography sx={{color:'gray',fontSize:'14px'}}>It is a long established fact that a <br/> reader will be distracted
</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
               <Stack direction="row" spacing={1}>
      <Chip label="Unread" sx={{background:'rgb(251,230,230)',color:'red'}}/>
      <Chip label="New"  sx={{background:'rgb(255,248,225)',color:'rgb(255,207,61)'}}/>
    </Stack>
            </Box>

          </Box>


        </Box>
        
        </MenuItem>
        <Divider/>
        <MenuItem sx={{background:'none'}}>
        
        <Box sx={{width:'100%',height:'120px',display:'flex',justifyContent:'space-between'}}>
          <Box sx={{width:'25%'}}>
            <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'rgb(185,246,202)',textAlign:'center',marginLeft:'20px',fontSize:'20px',color:'rgb(38,210,108)',padding:'10px'}}><MdOutlineStorefront/>
</Box>
          </Box>
          <Box sx={{width:'72%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Box sx={{width:'100%',height:'30px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'14px'}}>Store Verification Done</Typography>
              <Typography sx={{fontSize:"12px",color:'gray'}}>2 min ago</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
              <Typography sx={{color:'gray',fontSize:'12px'}}>We have successfully received your <br/> request.
</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
               <Stack direction="row" spacing={1}>
      <Chip label="Unread" sx={{background:'rgb(251,230,230)',color:'red'}}/>
    </Stack>
            </Box>

          </Box>


        </Box>
        
        </MenuItem>
        <Divider/>
        <MenuItem sx={{background:'none'}}>
        
        <Box sx={{width:'100%',height:'120px',display:'flex',justifyContent:'space-between'}}>
          <Box sx={{width:'25%'}}>
            <Box sx={{width:'20px',height:'20px',borderRadius:'100%',background:'rgb(225,240,251)',textAlign:'center',marginLeft:'20px',fontSize:'20px',color:'rgb(30,136,229)',padding:'10px'}}><PiMailboxLight />

</Box>
          </Box>
          <Box sx={{width:'72%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Box sx={{width:'100%',height:'30px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'14px'}}>Check Your Mail.</Typography>
              <Typography sx={{fontSize:"12px",color:'gray'}}>2 min ago</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
              <Typography sx={{color:'gray',fontSize:'12px'}}>All done! Now check your inbox as <br/> you're in for a sweet treat!
</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
              <Button variant="contained">Mail <FaRegPaperPlane /></Button>
            </Box>

          </Box>


        </Box>
        
        </MenuItem>
        <Divider/>
        <MenuItem sx={{background:'none'}}>
        
        <Box sx={{width:'100%',height:'120px',display:'flex',justifyContent:'space-between'}}>
          <Box sx={{width:'25%'}}>
            <Avatar alt="Remy Sharp" src="./images/profile.svg" sx={{marginLeft:'20px'}}/>
          </Box>
          <Box sx={{width:'72%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Box sx={{width:'100%',height:'30px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'14px'}}>John Doe</Typography>
              <Typography sx={{fontSize:"12px",color:'gray'}}>2 min ago</Typography>

            </Box>
            <Box sx={{width:'100%',height:'15px'}}>
              <Typography sx={{color:'gray',fontSize:'14px'}}>Uploaded two file on  21 Jan 2020
</Typography>

            </Box>
            <Box sx={{width:'100%',height:'55px'}}>
             <Box sx={{width:'220px',height:"60px",background:'rgb(237,231,246)',display:'flex',alignItems:'center'}}>
              <Typography sx={{fontSize:'25px',marginLeft:'30px'}}><CiImageOn/>
</Typography>
<Typography sx={{fontWeight:'bold',marginLeft:'10px'}}>demo.jpg</Typography>

             </Box>
            </Box>

          </Box>


        </Box>
        
        </MenuItem>
        <Divider/>
         <MenuItem sx={{background:'none'}}>
        
        <Box sx={{width:'100%',height:'120px',display:'flex',justifyContent:'space-between'}}>
          <Box sx={{width:'25%'}}>
            <Avatar alt="Remy Sharp" src="./images/profile.svg" sx={{marginLeft:'20px'}}/>
          </Box>
          <Box sx={{width:'72%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Box sx={{width:'100%',height:'30px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'14px'}}>John Doe</Typography>
              <Typography sx={{fontSize:"12px",color:'gray'}}>2 min ago</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
              <Typography sx={{color:'gray',fontSize:'14px'}}>It is a long established fact that a <br/> reader will be distracted
</Typography>

            </Box>
            <Box sx={{width:'100%',height:'40px'}}>
               <Stack direction="row" spacing={1}>
      <Chip label="Confirmation of Account" sx={{background:'rgb(220,250,228)',color:'green'}}/>
      
    </Stack>
            </Box>

          </Box>


        </Box>
        
        </MenuItem>
        <Divider/>
        <Button
                variant="text"
                sx={{
                  color: "#1A73E8",
                  textTransform: "none",
                  display: "flex",
                  mx: "auto",
                  marginTop:'10px'
                }}
              >
                View All
              </Button>
        
      </Menu>
    </React.Fragment>
  )}
</PopupState> */}







            {/*  */}
          </Box>
        </Toolbar>
      </AppBar>

      <Box

        sx={{
          position:'fixed',
          width: openDrawer ? drawerWidth : miniWidth,
          transition: 'width 0.3s',
          flexShrink: 0,
          mt: '70px',
          height: 'calc(100vh - 70px)',
          bgcolor: "background.paper",
          color:"text.primary",
          overflowX: 'hidden',
          display: { xs: 'none', md: 'block' },
        }}
      >
      
        <List sx={{ pt: 2 }}>
        
<ListItem disablePadding>
  <ListItemButton
    onClick={() => setSelectedCategory("All")}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: openDrawer ? 'flex-start' : 'center',
      px: 2,
      gap: 1,
      backgroundColor: selectedCategory === "All" ? "rgb(242,242,242)" : "transparent", 
      borderRadius: '8px', // optional rounded highlight
    
    }}
  >
    <Box
      sx={{
        color: selectedCategory === "All" ? "black" : "black",
        fontWeight: selectedCategory === 'All' ? "bold" :'none',

      }}
    >
      <AiOutlineHome style={{ fontSize: '25px' }} />
    </Box>
    <ListItemText
      primary={"Home"}
      sx={{
        opacity: openDrawer ? 1 : 0,
        ml: openDrawer ? 2 : 0,
        fontFamily:'sans-serif',
        display: openDrawer ? 'block' : 'none', 
        transition: 'opacity 0.3s, margin 0.3s',
        fontSize: '10px',
        color: selectedCategory === "All" ? "black" : "black",
        "& .MuiTypography-root": {
        fontWeight: selectedCategory === "All" ? 500 : 400,
      }
      }}
    />
  </ListItemButton>
</ListItem>



<ListItem disablePadding>
            <ListItemButton
            onClick={() => setSelectedCategory("Music")}
            //   component={Link}
            //   to="/dashboard/analytics"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
                backgroundColor: selectedCategory === "Music" ? "rgb(242,242,242)" : "transparent", 
                borderRadius: '8px', // optional rounded highlight

              }}
            >
              <Box
                sx={{
                  color:'black',
                  
                }}
              >
                <IoMusicalNoteOutline style={{fontSize:'25px'}}/>
              </Box>
              <ListItemText
                primary={"Music"}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 2 : 0,
                  transition: 'opacity 0.3s',
                  color:'black',
                  fontSize:'10px',
                 "& .MuiTypography-root": {
                fontWeight: selectedCategory === "Music" ? 500 : 400,
                 }
                }}
              />
            </ListItemButton>
</ListItem>

<ListItem disablePadding >
            <ListItemButton
            onClick={() => setSelectedCategory("Gaming")}
            //   component={Link}
            //   to="/dashboard/invoice"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
      //            backgroundColor: selectedCategory === "Gaming" ? "rgb(242,242,242)" : "transparent", 
      // borderRadius: '8px', // optional rounded highlight
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
               <IoGameControllerOutline style={{fontSize:'25px'}}/>

              </Box>
              <ListItemText
                primary={"Gaming"}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 2: 0,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px',
    //               "& .MuiTypography-root": {
    //   fontWeight: selectedCategory === "Gaming" ? 500 : 400,
    //   // color: selectedCategory === "All" ? "purple" : "text.primary"
    // }
                }}
              />
            </ListItemButton>
</ListItem>

<ListItem disablePadding >
            <ListItemButton
            onClick={() => setSelectedCategory("News")}
            //   component={Link}
            //   to="/dashboard/crm"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
      //            backgroundColor: selectedCategory === "News" ? "rgb(242,242,242)" : "transparent", 
      // borderRadius: '8px', // optional rounded highlight
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <PiNewspaperClipping style={{fontSize:'25px'}}/>
             
              </Box>
              <ListItemText
                primary={"News"}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 2 : 0,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px',
    //               "& .MuiTypography-root": {
    //   fontWeight: selectedCategory === "News" ? 500 : 400,
    //   // color: selectedCategory === "All" ? "purple" : "text.primary"
    // }
                }}
              />
            </ListItemButton>
</ListItem>

<ListItem disablePadding >
            <ListItemButton
            onClick={() => setSelectedCategory("Sports")}
            //   component={Link}
            //   to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
      //            backgroundColor: selectedCategory === "Sports" ? "rgb(242,242,242)" : "transparent", 
      // borderRadius: '8px', // optional rounded highlight
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <CiTrophy  style={{fontSize:'25px'}}/>
             
              </Box>
              <ListItemText
                primary={"Sports"}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 2 : 0,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px',
    //               "& .MuiTypography-root": {
    //   fontWeight: selectedCategory === "Sports" ? 500 : 400,
    //   // color: selectedCategory === "All" ? "purple" : "text.primary"
    // }
                }}
              />
            </ListItemButton>
</ListItem>

<ListItem disablePadding >
            <ListItemButton
            onClick={() => setSelectedCategory("Blogs")}
            //   component={Link}
            //   to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
      //            backgroundColor: selectedCategory === "Blogs" ? "rgb(242,242,242)" : "transparent", 
      // borderRadius: '8px', // optional rounded highlight
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <TbBrandBlogger style={{fontSize:'25px'}}/>
             
              </Box>
              <ListItemText
                primary={"Blogs"}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 2 : 0,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px',
    //               "& .MuiTypography-root": {
    //   fontWeight: selectedCategory === "Blogs" ? 500 : 400,
    //   // color: selectedCategory === "All" ? "purple" : "text.primary"
    // }
                }}
              />
            </ListItemButton>
</ListItem>

<ListItem disablePadding >
            <ListItemButton
            onClick={() => setSelectedCategory("Entertainment")}
            //   component={Link}
            //   to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
      //            backgroundColor: selectedCategory === "Entertainment" ? "rgb(242,242,242)" : "transparent", 
      // borderRadius: '8px', // optional rounded highlight
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <FiTv style={{fontSize:'25px'}}/>
             
              </Box>
              <ListItemText
                primary={"Entertainment"}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 2 : 0,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px',
    //               "& .MuiTypography-root": {
    //   fontWeight: selectedCategory === "Entertainment" ? 500 : 400,
    //   // color: selectedCategory === "All" ? "purple" : "text.primary"
    // }
                }}
              />
            </ListItemButton>
</ListItem>

</List>
 
<Divider sx={{width:openDrawer ? '90%' : '100%',margin:openDrawer ? 'auto' :'none'}}/>       

<List sx={{ pt: 2 }}>
<ListItem disablePadding >
  <ListItemText
    primary={"Subscriptions"}
    sx={{
      opacity: openDrawer ? 1 : 0,
      ml: openDrawer ? 2 : 0,
      display: openDrawer ? 'block' : 'none', 
      transition: 'opacity 0.3s, margin 0.3s',
      fontSize:"20px"
    }}
    primaryTypographyProps={{
      fontWeight: 700,
    }}
  />
</ListItem>

<ListItem disablePadding sx={{ mb: 0.3 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
            //   component={Link}
            //   to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <Avatar alt="Travis Howard" src="images/avatar.jpg" sx={{ width: 26, height: 26 }}/>
             
              </Box>
              <ListItemText
                primary={"PewDiePie"}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 2 : 0,
                  transition: 'opacity 0.3s',
                  color:'text.primary',
                  fontSize:'10px',
                  fontFamily:'sans-serif'
                }}
              />
            </ListItemButton>
</ListItem>
    
<ListItem disablePadding sx={{ mb: 0.3 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
            //   component={Link}
            //   to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <Avatar alt="Travis Howard" src="images/avatar2.jpg" sx={{ width: 26, height: 26 }}/>
             
              </Box>
              <ListItemText
                primary={"MrBeast"}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 2 : 0,
                  transition: 'opacity 0.3s',
                  color:'text.primary',
                  fontSize:'10px',
                  fontFamily:'sans-serif'
                }}
              />
            </ListItemButton>
</ListItem>
       
<ListItem disablePadding sx={{ mb: 0.3 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
            //   component={Link}
            //   to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <Avatar alt="Travis Howard" src="images/avatar3.jpg" sx={{ width: 26, height: 26 }}/>
             
              </Box>
              <ListItemText
                primary={"Disnep Channel"}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 2 : 0,
                  transition: 'opacity 0.3s',
                  color:'text.primary',
                  fontSize:'10px',
                  fontFamily:'sans-serif'
                }}
              />
            </ListItemButton>
</ListItem>  

<ListItem disablePadding sx={{ mb: 0.3 , '&:hover':{
            background:'rgb(237,231,246)',
            
          }}}>
            <ListItemButton
            //   component={Link}
            //   to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: openDrawer ? 'flex-start' : 'center',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <Avatar alt="Travis Howard" src="images/avatar4.jpg" sx={{ width: 26, height: 26 }}/>
             
              </Box>
              <ListItemText
                primary={"Justin Bieber"}
                sx={{
                  opacity: openDrawer ? 1 : 0,
                  ml: openDrawer ? 2 : 0,
                  transition: 'opacity 0.3s',
                  color:'text.primary',
                //   fontSize:'5px',
                  fontFamily:'Roboto, sans-serif'
                }}
              />
            </ListItemButton>
</ListItem> 
</List>      
      </Box>
      
      {/*  */}
      
      
      

      {mobileSearchOpen && (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw', // Full viewport width
      zIndex: 1400,
      p: '10px 15px', // Mobile par edges se thora gap
      bgcolor: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
    }}
  >
    <Search 
      sx={{ 
        // flexGrow: 1, 
        width:'250px',
        display: 'flex', 
        alignItems: 'center',
        backgroundColor: '#f1f3f4', // Light gray background
        borderRadius: '24px', // Modern rounded look
        padding: '2px 12px',
        height: '40px'
      }}
    >
      <SearchIconWrapper sx={{ display: 'flex', alignItems: 'center' }}>
        <SearchIcon sx={{ color: 'gray', fontSize: '20px' }} />
      </SearchIconWrapper>
      
      <StyledInputBase 
        autoFocus 
        placeholder="Search..." 
        inputProps={{ 'aria-label': 'search' }} 
        sx={{ 
          ml: 1, 
          width: '100%', // Ye ensures ke input poori space le
          '& .MuiInputBase-input': {
            fontSize: '16px', // Mobile par zoom-in se bachne ke liye standard size
            padding: '8px 0',
          }
        }}
      />
    </Search>

    <IconButton 
      onClick={() => setMobileSearchOpen(false)}
      sx={{ 
        flexShrink: 0, // Icon ko squeeze hone se bachata hai
        color: '#606060' ,
        padding:'7px',borderRadius:'100%',background:'rgb(248,248,248)',border:'1px solid lightgrey'
      }}
    >
      <CloseIcon />
    </IconButton>
     {/* <IconButton sx={{padding:'7px',borderRadius:'100%',background:'rgb(248,248,248)',border:'1px solid lightgrey'}}>
                <TiMicrophoneOutline size={26}/> */}

            {/* </IconButton> */}
  </Box>
)}
      {mobileDrawerOpen && (
        <Box
          sx={{
            position: 'fixed',
    top: 0,
    left: 0,
    width: '240px',
    height: '100vh',        
    bgcolor: 'background.paper',
    zIndex: 1400,
    color: "text.primary",
    p: 2,
    boxShadow: 3,
    overflowX: 'hidden',
          }}
        >
        {/*  */}
 <List sx={{ pt: 2 }}>
     
<ListItem disablePadding sx={{ mb: 1,  }}>
  <ListItemButton
    onClick={() => setSelectedCategory("All")}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      px: 2,
      gap: 1,
    }}
  >
    <Box
      sx={{
       color:'text.primary',
        '&:hover': { color: 'purple' },
      }}
    >
      <AiOutlineHome style={{ fontSize: '20px' }} />
    </Box>
    <ListItemText
      primary={"Home"}
      sx={{
        opacity:1,
        ml:  1,
        display:  'block', 
        transition: 'opacity 0.3s, margin 0.3s',
       color:'text.primary',
        fontSize: '10px',
      }}
    />
  </ListItemButton>
</ListItem>


          <ListItem disablePadding sx={{ mb: 1}}>
            <ListItemButton
           onClick={() => setSelectedCategory("Music")}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:  'flex-start' ,
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': {color: 'purple'},
                }}
              >
                <IoMusicalNoteOutline  style={{fontSize:'20px'}}/>
              </Box>
              <ListItemText
                primary={"Music"}
                sx={{
                  opacity: 1,
                  ml:1 ,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1}}>
            <ListItemButton
           onClick={() => setSelectedCategory("Gaming")}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
               <IoGameControllerOutline style={{fontSize:'20px'}}/>

              </Box>
              <ListItemText
                primary={"Gaming"}
                sx={{
                  opacity:1 ,
                  ml:  1 ,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1}}>
            <ListItemButton
           onClick={() => setSelectedCategory("News")}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start' ,
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <PiNewspaperClipping style={{fontSize:'20px'}}/>
             


              </Box>
              <ListItemText
                primary={"News"}
                sx={{
                  opacity:  1 ,
                  ml:  1 ,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1}}>
            <ListItemButton
             onClick={() => setSelectedCategory("Sports")}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'flex-start' ,
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <CiTrophy />
             


              </Box>
              <ListItemText
                primary={"Sports"}
                sx={{
                  opacity:  1 ,
                  ml:  1 ,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>

           <ListItem disablePadding sx={{ mb: 1
}}>
            <ListItemButton
           onClick={() => setSelectedCategory("Blogs")}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'flex-start' ,
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <TbBrandBlogger />
             


              </Box>
              <ListItemText
                primary={"Blogs"}
                sx={{
                  opacity:  1 ,
                  ml:  1 ,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>

           <ListItem disablePadding sx={{ mb: 1
}}>
            <ListItemButton
            onClick={() => setSelectedCategory("Entertainment")}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'flex-start' ,
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <FiTv />
             


              </Box>
              <ListItemText
                primary={"Entertainment"}
                sx={{
                  opacity:  1 ,
                  ml:  1 ,
                  transition: 'opacity 0.3s',
                 color:'text.primary',
                  // fontWeight: 500,
                  fontSize:'10px'
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{width:openDrawer ? '90%' : '100%',margin:openDrawer ? 'auto' :'none'}}/>       
<List sx={{ pt: 2 }}>
<ListItem disablePadding >
  <ListItemText
    primary={"Subscriptions"}
    sx={{
      opacity:1 ,
      ml: 2 ,
      display: 'block', 
      transition: 'opacity 0.3s, margin 0.3s',
      fontSize:"20px"
    }}
    primaryTypographyProps={{
      fontWeight: 700,
    }}
  />
</ListItem>

<ListItem disablePadding sx={{ mb: 0.3 }}>
            <ListItemButton
            //   component={Link}
            //   to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start' ,
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <Avatar alt="Travis Howard" src="/images/avatar.jpg" sx={{ width: 26, height: 26 }}/>
             
              </Box>
              <ListItemText
                primary={"PewDiePie"}
                sx={{
                  opacity: 1 ,
                  ml: 2 ,
                  transition: 'opacity 0.3s',
                  color:'black',
                  fontSize:'10px',
                  fontFamily:'sans-serif'
                }}
              />
            </ListItemButton>
</ListItem>
    
<ListItem disablePadding sx={{ mb: 0.3 }}>
            <ListItemButton
            //   component={Link}
            //   to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'flex-start',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <Avatar alt="Travis Howard" src="/images/avatar2.jpg" sx={{ width: 26, height: 26 }}/>
             
              </Box>
              <ListItemText
                primary={"MrBeast"}
                sx={{
                  opacity: 1 ,
                  ml: 2 ,
                  transition: 'opacity 0.3s',
                  color:'black',
                  fontSize:'10px',
                  fontFamily:'sans-serif'
                }}
              />
            </ListItemButton>
</ListItem>
       
<ListItem disablePadding sx={{ mb: 0.3 }}>
            <ListItemButton
            //   component={Link}
            //   to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'flex-start',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <Avatar alt="Travis Howard" src="/images/avatar3.jpg" sx={{ width: 26, height: 26 }}/>
             
              </Box>
              <ListItemText
                primary={"Disnep Channel"}
                sx={{
                  opacity: 1 ,
                  ml: 2 ,
                  transition: 'opacity 0.3s',
                  color:'black',
                  fontSize:'10px',
                  fontFamily:'sans-serif'
                }}
              />
            </ListItemButton>
</ListItem>  

<ListItem disablePadding sx={{ mb: 0.3 }}>
            <ListItemButton
            //   component={Link}
            //   to="/dashboard/blogs"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                px: 2,
                gap: 1,
              }}
            >
              <Box
                sx={{
                  color:'text.primary',
                  '&:hover': { color: 'purple' },
                }}
              >
              <Avatar alt="Travis Howard" src="/images/avatar4.jpg" sx={{ width: 26, height: 26 }}/>
             
              </Box>
              <ListItemText
                primary={"Justin Bieber"}
                sx={{
                  opacity: 1,
                  ml: 2,
                  transition: 'opacity 0.3s',
                  color:'black',
                //   fontSize:'5px',
                  fontFamily:'Roboto, sans-serif'
                }}
              />
            </ListItemButton>
</ListItem> 
</List> 


{/*  */}
        </Box>
      )}

      {mobileDrawerOpen && (
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            backdropFilter: 'blur(3px)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1300,
          }}
          onClick={() => setMobileDrawerOpen(false)}
        />
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 3,
          pb:3,
          ml: { xs: 0, md: openDrawer ? `${drawerWidth}px` : `${miniWidth}px` },
          transition: 'margin 0.3s',
          bgcolor: "white",
          mt: '80px',
          height: 'auto',
          overflow: 'hidden', 
        }}
      >
        
        {children}
        
      </Box>
  
    </Box>
    )
}