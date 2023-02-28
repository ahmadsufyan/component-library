import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sider } from './sider';
import "./sider.style.scss";

export default {
  title: 'Unity/Sider',
  component: Sider,
  parameters: {
    layout: 'fullscreen',
  },
  args:{
    
  }
} as ComponentMeta<typeof Sider>;

export const Left: ComponentStory<typeof Sider> = (args) => {
  return(
    <Sider
      type={'left'}
      {...args}
    />
  )
};

export const Right: ComponentStory<typeof Sider> = (args) => {
  return(
    <Sider
      type={'right'}
      {...args}
    />
  )
};