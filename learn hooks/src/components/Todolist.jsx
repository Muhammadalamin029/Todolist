import React, { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInput = (event) => {
    setNewTodo(event.target.value);
  };
  const handleTodo = (event) => {
    if (newTodo !== "") {
      setTodo((t) => [...t, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (i) => {
    const updatedTodo = todo.filter((_, index) => index != i);
    setTodo(updatedTodo);
  };

  return (
    <div className="todo-container">
      <h1>TodoList</h1>
      <input
        className="index"
        value={newTodo}
        onChange={handleInput}
        type="text"
      />
      <br />
      <button onClick={handleTodo}>Add Task</button>
      <ol>
        {todo.map((item, i) => (
          <li>
            <span>{item}</span>
            <button className="btn" onClick={() => deleteTodo(i)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todolist;
