import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AddTodo } from "./AddTodo";

export default {
  title: "TodoMVC/AddTodo",
  component: AddTodo,
  argTypes: {},
} as ComponentMeta<typeof AddTodo>;

const Template: ComponentStory<typeof AddTodo> = (args) => (
  <AddTodo {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: "请输入 TODO 事项",
};
