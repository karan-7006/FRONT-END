import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./WaterLand/Pages/Home";
import About from "./WaterLand/Pages/About";
import Service from "./WaterLand/Pages/Service";
import Blog from "./WaterLand/Pages/Blog";
import Contact from "./WaterLand/Pages/Contact";
import Feature from "./WaterLand/Pages/Feature";
import Gallery from "./WaterLand/Pages/Gallery";
import Attractions from "./WaterLand/Pages/Attractions";
import Ticket from "./WaterLand/Pages/Ticket";
import Team from "./WaterLand/Pages/Team";
import Testimonial from "./WaterLand/Pages/Testimonial";
import NotFound from "./WaterLand/Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Feature" element={<Feature />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Attraction" element={<Attractions />} />
      <Route path="/Ticket" element={<Ticket />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Testimonial" element={<Testimonial />} />
      <Route path="*" element={<NotFound />} />


      </Routes>
      
    </div>
    </BrowserRouter>
  );
 
}

export default App;
