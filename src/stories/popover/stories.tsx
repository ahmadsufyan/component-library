import { Story, Meta } from '@storybook/react';
import { Popover, PopoverProps } from '.';

export default {
  title: 'Example/Popover',
  component: Popover,
  args: {
   
  },
} as Meta<PopoverProps>;

export const Item: Story<PopoverProps> = (args) => {
  return(
    <div className='w-[50vw] h-[300px] flex justify-center items-center bg-gray-50'>
      <Popover
        {...args}
        title={"Click/Hover Me"}
      >
        <Popover.Item>Popover Item</Popover.Item>
      </Popover>
    </div>
  )
};

export const Content: Story<PopoverProps> = (args) => {
  return(
    <div className='w-[50vw] h-[300px] flex justify-center items-center bg-gray-50'>
      <Popover
        {...args}
        title={"Click/Hover Me"}
      >
        <div className='bg-gray-500 w-full h-[100px] flex justify-center items-center'>
          Content
        </div>
      </Popover>
    </div>
  )
};
