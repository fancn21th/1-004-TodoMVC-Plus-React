import styled from "styled-components";

interface TodoListProps {}

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
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :nth-child(odd) {
    background: #f9f9f9;
  }

  :hover {
    background: #ddd;
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

export const TodoList = ({}: TodoListProps) => {
  return (
    <UL>
      <LI>
        Hit the gym <CloseButton>×</CloseButton>
      </LI>
      <LI>
        Pay bills <CloseButton>×</CloseButton>
      </LI>
      <LI>
        Meet George <CloseButton>×</CloseButton>
      </LI>
      <LI>
        Buy eggs <CloseButton>×</CloseButton>
      </LI>
      <LI>
        Read a book <CloseButton>×</CloseButton>
      </LI>
      <LI>
        Organize office <CloseButton>×</CloseButton>
      </LI>
    </UL>
  );
};
