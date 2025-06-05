import React, { useState } from 'react';

const Task4Q2 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1 className='display-2 fw-bold mt-3'>Count: {count}</h1>
      <button className='btn btn-primary mt-3' onClick={handleIncrement} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Increment
      </button>
    </div>
  );
};

export default Task4Q2;
