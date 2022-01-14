import React from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";
import Home from "./comp/Home/Home";
import Trade from "./comp/Trade/Trade"


import "./App.css";
const App = () => {
	return (
		<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trade" element={<Trade />} />
      </Routes>
    </BrowserRouter>
	)
}

export default App