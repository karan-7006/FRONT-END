import React from 'react'

function D({name, setname}) {
  return (
    <div>
      <h1>Hello, This is D Component</h1>
        <h1>Hello this Name :- {name}</h1>
        <button onClick={()=>setname("Jeel Parmar")}>Change name</button>
    </div>
  )
}

export default D
