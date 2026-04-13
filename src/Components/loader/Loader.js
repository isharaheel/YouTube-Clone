// import { RotatingLines } from "react-loader-spinner";

import { Box } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
   <Box sx={{margin:'60px auto',width:'fit-content'}}>

     <RotatingLines
      visible={true}
      height="40"
      width="40"
    //   margin='30px auto'
      color="grey"
      strokeWidth="5"
      animationDuration="1"
      ariaLabel="rotating-lines-loading"
    />
   </Box>
  );
}