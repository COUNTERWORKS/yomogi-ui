import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormLabel } from './FormLabel';

export default {
  title: 'YOMOGI-UI/Form/FormLabel',
  component: FormLabel,
  args: {
    children: 'formLabel',
    optional: false,
  },
} as ComponentMeta<typeof FormLabel>;


const Template: ComponentStory<typeof FormLabel> = (args) => <FormLabel {...args} />;

export const Default = Template.bind({});

export const Optional = Template.bind({});

Optional.args = {
  optional: true,
};
