import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TodoList } from "./TodoList";

export default {
  title: "TodoMVC/TodoList",
  component: TodoList,
  argTypes: {},
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  todos: [
    {
      id: 1,
      title: "吃饭",
    },
    {
      id: 2,
      title: "睡觉",
    },
    {
      id: 3,
      title: "打游戏",
    },
  ],
};

export const Secondary = Template.bind({});

Secondary.args = {
  todos: [
    {
      id: 1,
      title: "吃饭",
      completed: true,
    },
    {
      id: 2,
      title: "睡觉",
    },
    {
      id: 3,
      title: "打游戏",
    },
  ],
};
