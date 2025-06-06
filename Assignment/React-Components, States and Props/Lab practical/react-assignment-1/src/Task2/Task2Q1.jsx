import React from 'react'


const technology = "JSX";
const description = "JavaScript XML";
const creator = "React";
const year = 2013;
const benefit = "combines HTML-like syntax with JavaScript expressions";

function Task2Q1() {
  return (
    <div className="container text-primary mt-5 p-5 rounded-5 shadow">
      <h1 className="display-4 fw-bold text-blue text-center mb-4">
        Welcome to JSX
      </h1>
      
      <p className="text-center mx-4 mb-6">
        {technology} stands for {description} and was introduced by {creator} in {year}. 
        It {benefit}, making it easier to write and understand React components. 
        With JSX, you can embed JavaScript expressions like {2 + 3} directly in your markup 
        using curly braces, creating dynamic and interactive user interfaces.
      </p>
    </div>
  )
}

export default Task2Q1
