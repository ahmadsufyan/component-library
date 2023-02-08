import { ComponentStory, ComponentMeta } from '@storybook/react';
import { store } from 'lib/store';
import { Provider } from 'react-redux';
import { Table } from '.';

export default {
  title: 'Example/Table',
  component: Table,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  args:{
    bordered: true,
    size: "middle",
  }
 
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});