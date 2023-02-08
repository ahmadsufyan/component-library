import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { store } from 'lib/store';
import { Provider } from 'react-redux';
import { Table } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Table',
  component: Table,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>]
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  bordered: true,
  size: "middle",
};