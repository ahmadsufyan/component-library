import { Story, Meta } from '@storybook/react';
import { PopoverItem, PopoverItemProps } from '.';

export default {
  title: 'Example/PopoverItem',
  component: PopoverItem,
  args: {
   
  },
} as Meta<PopoverItemProps>;

export const Default: Story<PopoverItemProps> = (args) => {
  return(
    <PopoverItem
      {...args}
      className=" !bg-black w-[300px]"
    >
      Popover item
    </PopoverItem>
  )
};
