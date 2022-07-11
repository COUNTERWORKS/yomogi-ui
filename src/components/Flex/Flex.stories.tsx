import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';
import { Button } from '../Button';

export default {
  title: 'YOMOGI-UI/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;


const Template: ComponentStory<typeof Flex> = () =>(
  <Flex justify='space-between'><Button>button1</Button><Button>button2</Button></Flex>
);

export const Default = Template.bind({});


