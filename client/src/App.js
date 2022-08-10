import React from "react";
import Landing from "../src/components/Landing.jsx";
import Home from "../src/components/Home.jsx";
import Detail from "../src/components/Detail.jsx";
import Create from "../src/components/Create.jsx";
import About from "./components/About.jsx";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path={"/home"} element={<Home/>}/>
        <Route path={"/detail"} element={<Detail/>}/>
        <Route path={"/create"} element={<Create/>}/>
        <Route path={"/about"} element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App;
