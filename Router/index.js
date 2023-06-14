import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PhotoPageLogin_Index from '../Components/The_Photopage/LoginPage/Index'
import PhotoPageHome_Index from '../Components/The_Photopage/HomePage/Index'
import PhotoPage_Creator_Login_Index from '../Components/The_Photopage/Creator/Index'
import Photopage_Creator_Home from '../Components/The_Photopage/Creator/Creator_home'
import Practise from "../Components/Practise/Practise";
import Photopage_viewer_home from '../Components/The_Photopage/Viewer/Index'
import Home from "../Components/Resume/Home/Home";

function FuntionalComponentRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/ThePhotopage" element={<PhotoPageLogin_Index />} />
                <Route exact path="/ThePhotopage/Home" element={<PhotoPageHome_Index />}></Route>
                <Route exact path='/ThePhotopage/Login/Creator' element={<PhotoPage_Creator_Login_Index />}></Route>
                <Route exact path='/ThePhotopage/Home/Creator' element={<Photopage_Creator_Home />}></Route>
                <Route exact path="/ThePhotopage/Home/Viewer" element={<Photopage_viewer_home />}></Route>
                <Route exact path="" element={<Practise></Practise>}></Route>
                <Route exact path='/resume/Akilesh.A.K/home' element={<Home />}></Route> 
            </Routes>
        </Router>
    )
}

export default FuntionalComponentRouter