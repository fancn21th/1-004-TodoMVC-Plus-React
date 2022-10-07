import { useState } from "react";
import "./App.css";
import { AddTodo } from "@/components/AddTodo/AddTodo";
import { TodoList, Todo } from "@/components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
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
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title,
      },
    ]);
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
