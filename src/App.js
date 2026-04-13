import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoDetail from "./Components/VideoDetails/VidDetail";
// import Navbar from "./Components/Navbar/Navbar";


export default function App() {
 const [openDrawer, setOpenDrawer] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  return (
   <>
   <BrowserRouter>
     <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} searchTerm={searchTerm} setSearchTerm={setSearchTerm}>

      <Routes>
        <Route path="/" element={<Home openDrawer={openDrawer} selectedCategory={selectedCategory} searchTerm={searchTerm}/>} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
      </Navbar>
    </BrowserRouter>
   
   </>
  );
}
