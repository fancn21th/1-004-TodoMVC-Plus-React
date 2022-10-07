import "./App.css";
import { AddTodo } from "@/components/AddTodo/AddTodo";
import { TodoList } from "@/components/TodoList/TodoList";
import { useTodos } from "@/hooks";

function App() {
  const [todos, addTodo, removeTodo] = useTodos();

  return (
    <div className="App">
      <h1>React + Typescript TODOs</h1>
      <AddTodo onAddTodo={(title) => addTodo(title)} />
      <hr />
      <TodoList todos={todos} onRemoveTodo={(id) => removeTodo(id)} />
    </div>
  );
}

export default App;
