import "./App.css";
import { AddTodo } from "@/components/AddTodo/AddTodo";
import { TodoList } from "@/components/TodoList/TodoList";
import { useTodos } from "@/hooks";

function App() {
  const [todos, addTodo] = useTodos();

  return (
    <div className="App">
      <h1>React + Typescript TODOs</h1>
      <AddTodo onAddTodo={(title) => addTodo(title)} />
      <hr />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
