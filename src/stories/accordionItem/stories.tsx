import { Story, ComponentMeta } from '@storybook/react';
import { AccordionItem, AccordionItemProps } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AccordionItem',
  component: AccordionItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    title: "Your title here",
    isOpen: false,
    suffixIcon: true
  },
} as ComponentMeta<typeof AccordionItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story<AccordionItemProps> = (args) => {
  return(
    <AccordionItem
      className='w-[200px]'
      suffixIcon={true}
      {...args}
    >
      <div className='rounded bg-neutral-50 p-4'>
        Your content Here
      </div>
    </AccordionItem>
  )
};
