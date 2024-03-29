import React from "react";
import "./App.css";

import Modal from "react-bootstrap/lib/Modal"
import Button from "react-bootstrap/lib/Button"
import { render } from "react-dom";
import Popup from "components/Popup/Popup.jsx";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <Button className="btn-primary btn-sm" onClick={() => completeTodo(index)}>
            Complete</Button>
        <Button className="btn-danger btn-sm" onClick={() => removeTodo(index)}>x</Button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}


function ToDo() {
  const [todos, setTodos] = React.useState([
    {
      text: "Addition",
      isCompleted: false
    },
    {
      text: "The story",
      isCompleted: false
    },
    {
      text: "Fun with science",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    render(<Popup show={true} text={"Send assessment?"}/>,document.getElementById("notify"))
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default ToDo;

