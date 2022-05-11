import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Input } from './Input';

export default {
  title: 'YOMOGI-UI/Form/Input',
  component: Input,
  args: {
    isError: false,
  },
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <FormBlock label='名前' hint="hint"><Input {...args} /></FormBlock>;

export const Default = Template.bind({});

export const WithError = Template.bind({});

WithError.args = {
  isError: true,
};
