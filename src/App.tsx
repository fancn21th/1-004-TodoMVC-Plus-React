import { useState } from "react";
import "./App.css";
import { AddTodo } from "@/components/AddTodo/AddTodo";
import { TodoList } from "@/components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "吃饭",
      completed: true,
    },
    {
      id: 2,
      title: "睡觉",
    },
    {
      id: 3,
      title: "打游戏",
    },
  ]);

  const onAddTodo = (title: string) => {
    console.log(title);
  };

  return (
    <div className="App">
      <h1>React + Typescript TODOs</h1>
      <AddTodo onAddTodo={onAddTodo} />
      <hr />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
