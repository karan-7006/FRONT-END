// components/TodoList.js
import React from 'react';
import ToDoitem from './todoItem';
import { todoListState } from '../../atoms/todoAtom';

const ToDoList = () => {
  const todos = (todoListState);

  return (
    <ul>
      {todos.map((todo) => (
        <ToDoitem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
