import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import React from 'react'
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./Menu";
import Contact from "./pages/Contact";



export default function App() {
  const [currMenu, setCurrMenu] = useState('');

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='c' element={<Contact />}></Route>
      </Routes>
      <Menu {...{currMenu, setCurrMenu}} />
    </div>
  )
}
