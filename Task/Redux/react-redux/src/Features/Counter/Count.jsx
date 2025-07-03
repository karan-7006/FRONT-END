import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './countSlice'

function Count() {

    const count = useSelector((state)=> state.counter.value)
    console.log(count)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>Hello:- {count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(zero())}>Zero</button>
    </div>
  )
}

export default Count
