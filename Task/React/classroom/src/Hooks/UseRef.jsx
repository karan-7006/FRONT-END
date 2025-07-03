// UseRef: It is used to manipulate the Dom without re-rendering the component.


import React, { useRef } from 'react'

function UseRef() {

const refelement = useRef()

const getfocus = ()=> {
    refelement.current.focus()
    refelement.current.style.color = "blue"
    refelement.current.style.background = "lightpink"
}

  return (
    <div style={{margin: "100px"}}>
      <input ref={refelement} type="text" />
      <button onClick={getfocus}>Focus</button>
    </div>
  )
}

export default UseRef
 