import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './PROJECT/Pages/ContactUs';
import AboutUs from './PROJECT/Pages/AboutUs';
import Help from './PROJECT/Pages/Help';
import Home from './PROJECT/Pages/Home';
// import ClassComponent from './Component/ClassComponent';
// import FunctionComponent from './Component/FunctionComponent';
// import HelloJSX from './JSX/HelloJSX';
// import CSSTypes from './CSS/CSSTypes';
// import ClassProps from './Props/ClassProps';
// import MainProps from './Props/MainProps';
// import MainContext from './Context/MainContext';


function App() {
  return (
    <BrowserRouter>
    <div>
      {/* <h1>Hello, App.js</h1> */}

      {/* -:Class and Function Components:-
            <ClassComponent />
            <FunctionComponent /> */}

      {/* -:JSX Example:-
      <HelloJSX /> */}

       {/* -:CSS Types Example:-
        <CSSTypes /> */}

        {/* Props Example
        <ClassProps />
        <MainProps /> */}

        {/* -:Context Example:-
        <MainContext /> */}


    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Help" element={<Help />} />
    </Routes>



    </BrowserRouter>
  );
}

export default App;
