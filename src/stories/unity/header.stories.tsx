import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../header';
import "./header.style.scss";

export default {
  title: 'Unity/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = (args) => {
  return(
    <Header>
      
    </Header>
  )
};