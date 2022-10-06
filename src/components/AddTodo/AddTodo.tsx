import styled from "styled-components";

interface AddTodoProps {
  label?: string;
}

// styled components

const Div = styled.div`
  width: 100%;
  box-sizing: border-box;
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
  background: #2196f3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
  line-height: 20px; // make the text align center vertically

  :hover {
    background: #0b7dda;
  }
`;

export const AddTodo = ({ label = "请输入" }: AddTodoProps) => {
  return (
    <Div>
      <Input type="text" placeholder={label} />
      <Button type="submit">增加</Button>
    </Div>
  );
};
