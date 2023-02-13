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
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  variant: "h1",
  children: "This is heading"
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: "p",
  children: "This is paragraph"
};