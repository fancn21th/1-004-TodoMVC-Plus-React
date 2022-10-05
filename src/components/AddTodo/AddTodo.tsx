interface AddTodoProps {
  label?: string;
}

export const AddTodo = ({ label = "请输入" }: AddTodoProps) => {
  return <h2>{label}</h2>;
};
