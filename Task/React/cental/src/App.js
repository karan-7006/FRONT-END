import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Service from "./Website/Pages/Service";
import Blog from "./Website/Pages/Blog";
import Contact from "./Website/Pages/Contact";
import Feature from "./Website/Pages/Feature";
import Cars from "./Website/Pages/Cars";
import Team from "./Website/Pages/Team";
import Testimonial from "./Website/Pages/Testimonial";
import NotFound from "./Website/Pages/NotFound";

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
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
