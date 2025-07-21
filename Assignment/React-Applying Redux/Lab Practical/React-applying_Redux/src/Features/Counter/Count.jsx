import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { decrement, increment, zero } from './countSlice'

function Count() {

    const count = useSelector((state)=> state.counter.value)
    console.log(count)

    const dispatch = useDispatch()

  return (
    <div className='mt-5 ms-5'>
      <h1 className='text-secondary'>Hello:- {count}</h1>
      <button className='btn btn-primary btn-hover' onClick={()=> dispatch(increment())}>Increment</button>
      <button className='btn btn-success ms-2 me-2' onClick={()=> dispatch(decrement())}>Decrement</button>
      <button className='btn btn-danger' onClick={()=> dispatch(zero())}>Zero</button>
    </div>
  )
}

export default Count
