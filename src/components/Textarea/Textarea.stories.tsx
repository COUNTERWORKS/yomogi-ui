import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Textarea } from './Textrarea';

export default {
  title: 'YOMOGI-UI/Form/Textarea',
  component: Textarea,
  args: {
    rows: 5,
    isError: false,
  },
} as ComponentMeta<typeof Textarea>;


const Template: ComponentStory<typeof Textarea> = (args) => <FormBlock label='詳細' hint="hint"><Textarea {...args} /></FormBlock>;

export const Default = Template.bind({});

export const WithError = Template.bind({});

WithError.args = {
  isError: true,
};
