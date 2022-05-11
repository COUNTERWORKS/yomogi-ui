import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormBlock } from './FormBlock';
import { Input } from '../Input';

export default {
  title: 'YOMOGI-UI/Form/FormBlock',
  component: FormBlock,
  args: {
  },
} as ComponentMeta<typeof FormBlock>;


const Template: ComponentStory<typeof FormBlock> = (args) => <FormBlock {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'label',
  hint: 'hint',
  children: <Input/>,
};

export const WithErrorMessage = Template.bind({});

WithErrorMessage.args = {
  label: 'label',
  hint: 'hint',
  children: <Input isError />,
  errorMessage: 'errorMessage',
};

