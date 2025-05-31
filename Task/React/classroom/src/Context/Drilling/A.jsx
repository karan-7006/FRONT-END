import React, { useState } from 'react'
import B from './B'

function A() {

    const[name,setname] = useState("Karan")

  return (
    <div>
      <h1>Hello, This is A Component</h1>
      <h1>Hello name :- {name}</h1>
      <B name={name} setname={setname} />
    </div>
  )
}

export default A
