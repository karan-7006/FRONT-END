// Hooks: It is a feature that allows you to use state and other React features without writing a class.
// Hooks are used in functional components and do not require a constructor.
// It reduces the code and also reusable.



import React, { useState } from 'react'

function FunctionState() {

      const [name, setname] = useState("Harshad")
      const [count, setCount] = useState(0)

  return (
    <div>

      <h1>Hello, Name: {name}</h1>
      <button onClick={()=>setname("Karan")}>Change Name</button>
            <button onClick={()=>setname("Akash")}>Change Name Again</button>
      
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <button onClick={()=>setCount(count - 1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>

    


    </div>
  )
}

export default FunctionState
