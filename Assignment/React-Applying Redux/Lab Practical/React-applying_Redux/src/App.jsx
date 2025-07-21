import React from "react"
// import Count from "./Features/Counter/Count"
// import AddToDo from "./Features/ToDo/AddToDo";
// import ToDoList from "./Features/ToDo/ToDoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Manage from "./Component/Manage";
import Add from "./Component/Add";
import Update from "./Component/Update";


function App() {

  return (
    <BrowserRouter>
    <div>
      {/* Question 1 */}
      {/* <Count /> */}

      {/* Queastion 2 */}
      {/* <AddToDo /> */}
      {/* <ToDoList /> */}

      {/* Question 3 */}
      <Routes>
      <Route path='/' element={<Manage />} />
      <Route path='Add' element={<Add />} />
      <Route path='/edit/:id' element={<Update />} />
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App
