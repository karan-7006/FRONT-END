import React from "react";
// import ClassProps from "./Props/ClassProps";
// import MainProps from "./Props/MainProps";
// import ClassComponent from "./Component/ClassComponent";
// import FunctionComponent from "./Component/FunctionComponent";
// import HelloJSX from "./JSX/HelloJSX";
// import CSSTypes from "./CSS/CSSTypes";
// import MainContext from "./Context/MainContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import Help from "./Layout/Pages/Help.Jsx";
import ContactUs from "./Layout/Pages/ContactUs";
import AboutUs from "./Layout/Pages/AboutUs";
import AboutUs1 from "./Layout/Pages/AboutUs1";
import AboutUs2 from "./Layout/Pages/AboutUs2"; 

function App() {
    return(
        <BrowserRouter>
       <div>
            {/* <h1>Hello, App.js</h1> */}

            {/* -:Class and Function Components:-
            <ClassComponent />
            <FunctionComponent /> */}

            {/* -:JSX Example:- */}
            {/* <HelloJSX /> */}

            {/* -:CSS Types Example:- */}
            {/* <CSSTypes /> */}

            {/* Props Example */}
            {/* <ClassProps /> */}
            {/* <MainProps /> */}

            {/* <MainContext /> */}
       </div>

                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/help" element={<Help />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/Help" element={<Help />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/AboutUs1" element={<AboutUs1 />} />
                <Route path="/AboutUs2" element={<AboutUs2 />} />
                </Routes>

       </BrowserRouter>
    )
}

export default App;