import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import CallbackPage from "./pages/callback";


function App() {

  return (
      <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/auth/callback/worldcoin" element={<CallbackPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
