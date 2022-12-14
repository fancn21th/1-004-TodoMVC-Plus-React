# React In Typescript

> \+ styled component \+ storybook & on top of vite

In this project I would like to re-polish the old school `todo list` web app with the latest frontend technology.

They are:

- [typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- react custom hook style
- [styled component](https://styled-components.com/)
- [storybook](https://storybook.js.org/)

## Usage

- storybook

  ```shell
  npm run storybook
  ```

- mock design system

  ```shell
  npm run dev
  ```

## How to type a React Component & Hook

### Function Component

```tsx
const foo: FunctionComponent<FooProps>  = ({...}) => { return ...}
```

### Hook

- useState

  ```tsx
  const [todo, setTodo] = useState<string>("");
  ```

- useReducer

  ```tsx
  const reducer = (state: TodosState, action: TodosAction): TodosState => {
  ...
  };
  ```

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
    setTodo("");
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

## How to type others

### Impersonate Native DOM

当你想包装另外一个 组件 的 时候 如何去 type props ? 需要一个个列出来吗 ?

```tsx
type CustomProps = {
  foo?: string;
};
function Bar(props: CustomProps & TypeA & Type B) {
  ...
}
```
