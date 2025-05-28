import React from 'react'
import C from './C'

function B({name, setname}) {

  return (
    <div>
      <h1>Hello, This is B Component</h1>
        <h1>hello name :- {name}</h1>
        <C name={name} setname={setname} />
    </div>
  )
}

export default B
