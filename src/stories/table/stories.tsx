import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from '.';

export default {
  title: 'Example/Table',
  component: Table,
  args:{
    bordered: true,
    size: "middle",
  }
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { company: "Alfreds Futterkiste", contact: "Maria Anders", country: "Germany" },
    { company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico" },
    { company: "Ernst Handel", contact: "Roland Mendel", country: "Austria" },
    { company: "Island Trading", contact: "Helen Bennett", country: "UK" },
    { company: "Laughing Bacchus Winecellars", contact: "Yoshi Tannamuri", country: "Canada" },
    { company: "Magazzini Alimentari Riuniti", contact: "Giovanni Rovelli", country: "Italy" },
  ],
  column: [
    { title: "Company", keyIndex: "company" },
    { title: "Contanct", keyIndex: "contact" },
    { title: "Country", keyIndex: "country" },
  ]
}