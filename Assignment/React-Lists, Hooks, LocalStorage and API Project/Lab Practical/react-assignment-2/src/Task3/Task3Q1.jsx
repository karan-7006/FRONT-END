import React, { useState } from 'react';

function Task3Q1() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div>
      <h2 className='display-2 fw-bold ms-3'>Counter: {count}</h2>
      <button className='btn btn-primary ms-3' onClick={increment}>Increment</button>
      <button className='btn btn-primary ms-3' onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Task3Q1;
