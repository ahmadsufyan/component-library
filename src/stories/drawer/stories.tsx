import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Drawer } from '.';

export default {
  title: 'Example/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
   
  },
} as ComponentMeta<typeof Drawer>;

export const Default: ComponentStory<typeof Drawer> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return(
    <>
      <button
        className='bg-gray-400 rounded px-4 py-1 text-white m-4'
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Open
      </button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <span className='font-bold'>Drawer</span>
      </Drawer>
    </>
  )
};
