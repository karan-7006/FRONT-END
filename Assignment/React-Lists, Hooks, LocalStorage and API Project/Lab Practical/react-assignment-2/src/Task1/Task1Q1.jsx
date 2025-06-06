import React from 'react'

function Task1Q1({ name = "John Doe", age = 25, location = "Unknown" }) {
  return (
    <div style={{ width: '18rem', margin: '100px auto', padding: '20px ', backgroundColor: 'lightgray', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)' }}>
      <div className="text-center">
        <h2 className="fw-bold text-secondary mb-4">User Profile</h2>
        
        <div>
          <div className="bg-gray-50 rounded-md p-3">
            <span>Name:</span>
            <p >{name}</p>
          </div>
          
          <div>
            <span>Age:</span>
            <p>{age} years old</p>
          </div>
          
          <div className="p-3">
            <span>Location:</span>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task1Q1