import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'YOMOGI-UI/Button',
  component: Button,
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
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

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

export const Light = Template.bind({});

Light.args = {
  color: 'light',
};
