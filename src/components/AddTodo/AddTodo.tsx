import { useState, FunctionComponent } from "react";
import styled from "styled-components";

interface AddTodoProps {
  label?: string;
  onAddTodo?: (newTodoTitle: string) => void;
}

// styled components

const Div = styled.div`
  width: 100%;
  box-sizing: border-box;

  ::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  height: 40px;
  background: #f1f1f1;
`;

const Button = styled.button`
  box-sizing: border-box;
  float: left;
  width: 20%;
  height: 40px;
  padding: 10px;
  background: ${(props) => props.theme.colors.primary100};
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
  line-height: 20px; // make the text align center vertically

  :hover {
    background: ${(props) => props.theme.colors.primary200};
  }
`;

export const AddTodo: FunctionComponent<AddTodoProps> = ({
  label = "请输入",
  onAddTodo = () => {},
}) => {
  const [todo, setTodo] = useState<string>("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodo(e.target.value);
  };

  const onClick = function () {
    onAddTodo(todo);
  };

  return (
    <Div>
      <Input type="text" value={todo} placeholder={label} onChange={onChange} />
      <Button type="submit" onClick={onClick}>
        增加
      </Button>
    </Div>
  );
};
