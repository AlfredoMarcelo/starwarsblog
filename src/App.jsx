import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import React from 'react'
import Home from "./views/Home"
import AllData from "./views/AllData"
import { Navbar } from "./components/Navbar";
import { User } from "./views/User";
import NotFound from "./views/NotFound";
import UserFavorite from "./views/UserFavorite";
import Dashboard from "./views/Dashboard";

export default function App (){
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all_data" element={<AllData/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/usuarios" element={<Navigate to="/user"/>} />
        <Route path="/user/:id" element={<UserFavorite/>} />
        <Route path="/dashboard/*" element={<Dashboard/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

