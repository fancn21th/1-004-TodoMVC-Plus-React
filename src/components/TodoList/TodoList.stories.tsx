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

Primary.args = {};
