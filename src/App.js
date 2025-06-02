import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import RegistrationPage from "./Components/RegistrationPage";
import OverlayForm from "./Components/OverLay";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { useState } from "react";

function App() {
  const[ loggedIn, setLoggedIn] = useState(false)
  return (
    <div style={{ backgroundColor: "#b57862" }}>
      <BrowserRouter>
      <Navbar loggedIn={true}/>
        <Routes>
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route index element={<Login setLoggedIn={setLoggedIn}/>} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <Navbar/>
//     <RegistrationPage/>
//     <Login/>
