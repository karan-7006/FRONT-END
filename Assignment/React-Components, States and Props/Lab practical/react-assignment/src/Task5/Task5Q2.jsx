import React from 'react'


const users = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Davis' },
    { id: 4, name: 'Diana Lee' },
    { id: 5, name: 'Ethan Wright' }
  ];

function Task5Q2() {
  return (
    <div>
      <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Task5Q2
