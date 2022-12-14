import React from "react";
import styled from "styled-components";
import { Todo } from "@/hooks";

interface TodoItemProps {
  /**  Todo 对象 */
  todo: Todo;
  index: number;
  onRemoveTodo: () => void;
  onToggleTodo: () => void;
}

interface TodoListProps {
  /**  Todo 对象数组 这段注释可以被看到 */
  todos: Todo[];
  onRemoveTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

interface LIProps {
  index: number;
}

// styled components

const UL = styled.ul`
  margin: 0;
  padding: 0;
`;

const LI = styled.li<
  LIProps &
    React.HTMLProps<HTMLButtonElement> &
    React.HTMLAttributes<HTMLButtonElement>
>`
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: ${(props) => (props.index % 2 === 0 ? "#eee" : "#f9f9f9")};
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
    background-color: ${(props) => props.theme.colors.danger};
    color: white;
  }
`;

const TodoItem = ({
  todo: { title, completed },
  index,
  onRemoveTodo,
  onToggleTodo,
}: TodoItemProps) => {
  return completed ? (
    <CompletedLI index={index}> {title}</CompletedLI>
  ) : (
    <LI index={index} onClick={() => onToggleTodo()}>
      {title}
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          onRemoveTodo();
        }}
      >
        ×
      </CloseButton>
    </LI>
  );
};

export const TodoList = ({
  todos,
  onRemoveTodo,
  onToggleTodo,
}: TodoListProps) => {
  return (
    <UL>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index + 1}
          onRemoveTodo={() => onRemoveTodo(todo.id)}
          onToggleTodo={() => onToggleTodo(todo.id)}
        ></TodoItem>
      ))}
    </UL>
  );
};
