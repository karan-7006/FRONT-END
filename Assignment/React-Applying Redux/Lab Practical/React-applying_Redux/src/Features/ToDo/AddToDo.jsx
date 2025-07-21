import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../atoms/todoAtom";

const AddToDo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useRecoilState(todoListState);

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, isCompleted: false }]);
      setText("");
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddToDo;
