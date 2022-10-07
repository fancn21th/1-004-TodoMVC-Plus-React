import { useReducer } from "react";

interface TodosState {
  todos: Todo[];
}

type TodosAction =
  | {
      type: "add";
      payload: {
        title: string;
      };
    }
  | {
      type: "remove" | "toggle";
      payload: {
        id: number;
      };
    };

const initialState = { todos: [] };

const reducer = (state: TodosState, action: TodosAction): TodosState => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case "remove":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case "toggle":
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const todo = state.todos[index];
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          {
            ...todo,
            completed: !todo.completed,
          },
          ...state.todos.slice(index + 1),
        ],
      };
    default:
      throw new Error();
  }
};

export interface Todo {
  title: string;
  id: number;
  completed?: boolean;
}

export const useTodos = (): [
  Todo[],
  (title: string) => void,
  (id: number) => void,
  (id: number) => void
] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (title: string): void => {
    dispatch({
      type: "add",
      payload: {
        title,
      },
    });
  };

  const removeTodo = (id: number): void => {
    dispatch({
      type: "remove",
      payload: {
        id,
      },
    });
  };

  const toggleTodo = (id: number): void => {
    dispatch({
      type: "toggle",
      payload: {
        id,
      },
    });
  };

  return [state.todos, addTodo, removeTodo, toggleTodo];
};
