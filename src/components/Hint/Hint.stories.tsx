import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hint } from './Hint';

export default {
  title: 'YOMOGI-UI/Form/Hint',
  component: Hint,
  args: {
    children: 'hint',
  },
} as ComponentMeta<typeof Hint>;


const Template: ComponentStory<typeof Hint> = (args) => <Hint {...args} />;

export const Default = Template.bind({});
