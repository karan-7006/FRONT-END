import React, { useState } from 'react';

function Task1Q2() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form>
        <label className='display-4 fw-bolder text-warning ms-5 mt-5'>
          Enter text: 
          <input className='ms-5' type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <p className='display-5 fw-bold text-danger ms-5'>You typed: {inputValue}</p>
    </div>
  );
}

export default Task1Q2;
