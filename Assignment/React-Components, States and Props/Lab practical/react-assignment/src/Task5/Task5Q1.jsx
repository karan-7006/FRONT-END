import React from 'react'


const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];


function Task5Q1() {
  return (
    <div>
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
    </div>
  )
}

export default Task5Q1
