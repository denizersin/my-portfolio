import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import React from 'react'
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./Menu";
import Contact from "./pages/Contact";
import RouteAnim from "./components/RouteAnim";
import Work from "./pages/Work";



export default function App() {
  const [currMenu, setCurrMenu] = useState('home');
  const [newMenu, setNewMenu] = useState('home');
  
  return (
    <div className="App">
      <RouteAnim currMenu={currMenu} newMenu={newMenu} setCurrMenu={setCurrMenu} />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/work' element={<Work />}></Route>
      </Routes>
      <Menu {...{ currMenu, setCurrMenu, newMenu, setNewMenu }} />
    </div>
  )
}


export async function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time);

  })
}