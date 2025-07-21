import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtom';

const ToDoitem = ({ todo }) => {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleComplete = () => {
    const updated = todos.map(t =>
      t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(updated);
  };

  const deleteTodo = () => {
    setTodos(todos.filter(t => t.id !== todo.id));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={toggleComplete}
      />
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
};

export default ToDoitem;
