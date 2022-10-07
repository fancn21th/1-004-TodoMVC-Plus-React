import { useReducer } from "react";

interface TodosState {
  todos: Todo[];
}

interface TodosAction {
  type: "add" | "remove";
  payload: {
    title: string;
  };
}

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
    default:
      throw new Error();
  }
};

export interface Todo {
  title: string;
  id: number;
  completed?: boolean;
}

export const useTodos = (): [Todo[], (title: string) => void] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (title: string): void => {
    dispatch({
      type: "add",
      payload: {
        title,
      },
    });
  };

  return [state.todos, addTodo];
};
