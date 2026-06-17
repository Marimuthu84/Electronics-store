import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Project/Pages/Home";
import MyNavbar from "./Project/Navbar";
import Laptop from "..//src/Project/Pages/Laptop";
import Mobiles from "..//src/Project/Pages/Mobiles";
import Accessories from "../src/Project/Pages/Accessories";
import Footer from "..//src/component/Footer";

function App() {
  return (
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mobile" element={<Mobiles/>} />
      <Route path="/laptop" element={<Laptop/>} />
      <Route path="/accessories" element={<Accessories/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;