import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sider } from './sider';

export default {
  title: 'Unity/Sider',
  component: Sider,
  parameters: {
    layout: 'fullscreen',
  },
  args:{
    
  }
} as ComponentMeta<typeof Sider>;

export const SideNav: ComponentStory<typeof Sider> = (args) => {
  return(
    <Sider
      type={'left'}
      {...args}
    />
  )
};

export const TopicNav: ComponentStory<typeof Sider> = (args) => {
  return(
    <Sider
      type={'right'}
      {...args}
    />
  )
};