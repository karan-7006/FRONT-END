import React from 'react'


const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];


function Task2Q1() {
  return (
      <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Task2Q1
