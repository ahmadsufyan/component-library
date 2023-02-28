import { Story, Meta } from '@storybook/react';
import { AccordionItemProps } from 'stories/accordionItem';

import { Accordion, AccordionProps } from '.';

export default {
  title: 'Example/Accordion',
  component: Accordion,
  args: {
    data: [
      {
        id: "1",
        title: "Accordion 1",
        suffixIcon: true,
        children: [
          {
            id: "1-1",
            title: "Accordion Item 1-1"
          },
          {
            id: "1-2",
            title: "Accordion Item 1-2"
          }
        ]
      },
      {
        id: "2",
        title: "Accordion 2",
        suffixIcon: true,
        children: [
          {
            id: "2-1",
            title: "Accordion Item 2-1",
            children: [
              {
                id: "2-1-1",
                title: "Accordion Item 2-1-1",
              }
            ]
          },
          {
            id: "2-2",
            title: "Accordion Item 2-2"
          }
        ]
      },
      {
        id: "3",
        title: "Accordion 3",
      }
    ]
  },
} as Meta<AccordionProps & { data: AccordionItemProps[]}>;

export const Default: Story<AccordionProps & { data: AccordionItemProps[]}> = (args) => {
  const { data } = args

  function generateItem(data:AccordionItemProps[]){
    const views:React.ReactNode[] = []
    data.forEach((d, i) => {
      views.push(
        <Accordion.Item
          key={i}
          id={d.id}
          title={d.title}
        >
          {d.children ? generateItem(d.children as AccordionItemProps[]) : null}
        </Accordion.Item>
      )
    })
    return views
  }

  return(
    <Accordion {...args}>
      {generateItem(data)}
    </Accordion>
  )
};

export const SingleOption: Story<AccordionProps & { data: AccordionItemProps[]}> = (args) => {
  const { data } = args

  function generateItem(data:AccordionItemProps[]){
    const views:React.ReactNode[] = []
    data.forEach((d, i) => {
      views.push(
        <Accordion.Item
          key={i}
          id={d.id}
          title={d.title}
          collapsible={false}
          suffixIcon={false}
        >
          {d.children ? generateItem(d.children as AccordionItemProps[]) : null}
        </Accordion.Item>
      )
    })
    return views
  }

  return(
    <Accordion
      {...args}
      traceTree={false}
    >
      {generateItem(data)}
    </Accordion>
  )
};

export const MultiOption: Story<AccordionProps & { data: AccordionItemProps[]}> = (args) => {
  const { data } = args

  function generateItem(data:AccordionItemProps[]){
    const views:React.ReactNode[] = []
    data.forEach((d, i) => {
      views.push(
        <Accordion.Item
          key={i}
          id={d.id}
          title={d.title}
          collapsible={false}
          suffixIcon={false}
        >
          {d.children ? generateItem(d.children as AccordionItemProps[]) : null}
        </Accordion.Item>
      )
    })
    return views
  }

  return(
    <Accordion
      {...args}
      traceTree={true}
    >
      {generateItem(data)}
    </Accordion>
  )
};
