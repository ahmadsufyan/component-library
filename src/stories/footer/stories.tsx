import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '.';

export default {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
   
  },
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStory<typeof Footer> = (args) => {
  return(
    <Footer>
      <span className='font-bold'>Footer</span>
    </Footer>
  )
};
