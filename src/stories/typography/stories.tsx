import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '.';

export default {
  title: 'Example/Typography',
  component: Typography,
  args: {
    strong: false,
    italic: false,
    underline: false
  },
  argTypes: {
    label: {
      table: {
        disable: true
      }
    },
    display: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  variant: "h1",
  label: "Your text here",
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: "p",
  label: "Your text here",
  display: "inline"
};