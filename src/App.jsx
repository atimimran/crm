import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


import EmptyVideoPage from "./pages/EmptyVideoPage.jsx";
import ChannelEmptyVideoPage from "./pages/ChannelEmptyVideoPage.jsx";
import MyChannelEmptyVideoPage from "./pages/MyChannelEmptyVideoPage.jsx";
import Login from "./pages/Login.jsx";
import Videolist from "./pages/Videolist.jsx";
import Videodetail from "./pages/VideoDetail.jsx";
import EditPersonalInfoPage from "./pages/EditPersonalInfoPage.jsx";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";

import Header from "./components/header.jsx";
import Video from "./components/video.jsx";
import Sidebar from "./components/sidebar";
import UploadVideoModalPopup from "./modal/UploadVideoModalPopup.jsx";
import UploadingVideoModalPopup from "./modal/UploadingVideoModalPopup.jsx";
import UploadedVideoSuccessfullyModalPopup from "./modal/UploadedVideoSuccessfullyModalPopup.jsx";
import EditVideoModalPopup from "./modal/EditVideoModalPopup.jsx";

function App() {
  console.log("frontenddddd")
  
  return (

    <BrowserRouter>
    
        <div className="app-container">
  
  <Header />
    
  
  


        <div className="main-layout">
          <Sidebar />
         
          <div className="page-content">
         
            <Routes>
              <Route path="/" element={<EmptyVideoPage />} />
              <Route path="/video" element={<Video />} />
              <Route path="/videolist" element={<Videolist />} />
              <Route path="/videodetail" element={<Videodetail />} />
              <Route
                path="/channelemptyvideopage"
                element={<ChannelEmptyVideoPage />}
              />
              <Route
                path="/mychannelemptyvideopage"
                element={<MyChannelEmptyVideoPage />}
              />
              <Route
                path="/uploadvideomodalpopup"
                element={<UploadVideoModalPopup />}
              />
              <Route
                path="/uploadingvideomodalpopup"
                element={<UploadingVideoModalPopup />}
              />
              <Route
                path="/uploadedvideosuccessfullymodalpopup"
                element={<UploadedVideoSuccessfullyModalPopup />}
              />
              <Route
                path="/editvideomodalpopup"
                element={<EditVideoModalPopup />}
              />
              <Route
                path="/editpersonalinfopage"
                element={<EditPersonalInfoPage />}
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admindashboardpage"
                element={<AdminDashboardPage />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
