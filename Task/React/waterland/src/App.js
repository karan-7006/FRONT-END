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
import DashBoard from "./Admin/AdPages/DashBoard";
import FeaturesManage from "./Admin/AdPages/Ad-Features/FeaturesManage";
import FeaturesAdd from "./Admin/AdPages/Ad-Features/FeaturesAdd";
import TeamManage from "./Admin/AdPages/Ad-Team/TeamManage";
import TeamAdd from "./Admin/AdPages/Ad-Team/TeamAdd";
import BlogManage from "./Admin/AdPages/Ad-Blogs/BlogManage";
import BlogAdd from "./Admin/AdPages/Ad-Blogs/BlogAdd";

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

      {/* ADMIN */}

      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/FeaturesManage" element={<FeaturesManage />} />
      <Route path="/FeaturesAdd" element={<FeaturesAdd />} />
      <Route path="/TeamManage" element={<TeamManage />} />
      <Route path="/TeamAdd" element={<TeamAdd />} />
      <Route path="/BlogManage" element={<BlogManage />} />
      <Route path="/BlogAdd" element={<BlogAdd />} />


      </Routes>
      
    </div>
    </BrowserRouter>
  );
 
}

export default App;
