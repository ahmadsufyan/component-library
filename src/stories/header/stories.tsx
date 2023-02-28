import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'Example/Header',
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