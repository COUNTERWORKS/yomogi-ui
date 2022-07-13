import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OutlineButton } from './OutlineButton';

export default {
  title: 'YOMOGI-UI/Button/OutlineButton',
  component: OutlineButton,
  args: {
    disabled: false,
    size: 'normal',
    formAdjacent: false,
    children: 'Button',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'neutral', 'light', 'danger'],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof OutlineButton>;


const Template: ComponentStory<typeof OutlineButton> = (args) => <OutlineButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  color: 'secondary',
};


export const Neutral = Template.bind({});

Neutral.args = {
  color: 'neutral',
};


export const Danger = Template.bind({});

Danger.args = {
  color: 'danger',
};
