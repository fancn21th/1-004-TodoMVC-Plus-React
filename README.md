# React In Typescript

> \+ styled component \+ storybook & on top of vite

## Typescript

### Function Component

```tsx
const foo: FunctionComponent<FooProps>  = ({...}) => { return ...}
```

### Hook

```tsx
const [todo, setTodo] = useState<string>("");
```

### Impersonate Native DOM

TBD...

### Controlled Component

```tsx
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
```
