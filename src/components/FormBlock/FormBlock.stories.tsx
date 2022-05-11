import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormBlock } from './FormBlock';

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
  children: 'input',
};

export const WithErrorMessage = Template.bind({});

WithErrorMessage.args = {
  label: 'label',
  hint: 'hint',
  children: 'input',
  errorMessage: 'errorMessage',
};

