import React, { useState } from 'react';

function Task2Q2() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <label className='display-4 fw-bolder text-warning ms-5 mt-5'>
        Enter your age:
        <input
          className='ms-5 mt-5 display-2 fw-bold text-warning'
          type="number"
          value={age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
      </label>
      <p className='display-5 fw-bold text-danger ms-5 mt-5'>
        {age === ''
          ? 'Please enter your age.'
          : age >= 18 && age <= 80
          ? 'You are eligible to vote.'
          : 'You are not eligible to vote.'}
      </p>
    </div>
  );
}

export default Task2Q2;
