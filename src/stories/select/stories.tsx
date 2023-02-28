import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '.';

export default {
  title: 'Example/Select',
  component: Select,
  args: {
   
  },
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (args) => {
  return(
    <Select>
    </Select>
  )
};
