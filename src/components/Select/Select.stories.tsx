import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Select } from './Select';

export default {
  title: 'YOMOGI-UI/Form/Select',
  component: Select,
  args: {
    isError: false,
  },
} as ComponentMeta<typeof Select>;


const Template: ComponentStory<typeof Select> = (args) => (
  <FormBlock label='名前' hint="hint">
    <Select {...args} >
      <option value="1">ほげほげ</option>
      <option value="2">ほげほげ</option>
    </Select>
  </FormBlock>
);

export const Default = Template.bind({});

export const WithError = Template.bind({});

WithError.args = {
  isError: true,
};
