import styled from "styled-components";

interface Todo {
  title: string;
  id: number;
  completed?: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

interface TodoListProps {
  todos: Todo[];
}

// styled components

const UL = styled.ul`
  margin: 0;
  padding: 0;
`;

const LI = styled.li`
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: all 200ms ease;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover {
    background: #ddd;
  }
`;

const CompletedLI = styled(LI)`
  background: #888;
  color: #fff;
  text-decoration: line-through;

  ::before {
    content: "";
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    top: 10px;
    left: 16px;
    transform: rotate(45deg);
    height: 15px;
    width: 7px;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
  transition: all 200ms ease;

  :hover {
    background-color: #f44336;
    color: white;
  }
`;

const TodoItem = ({ todo: { title, completed } }: TodoItemProps) => {
  return completed ? (
    <CompletedLI> {title}</CompletedLI>
  ) : (
    <LI>
      {title}
      <CloseButton>×</CloseButton>
    </LI>
  );
};

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <UL>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      ))}
    </UL>
  );
};
