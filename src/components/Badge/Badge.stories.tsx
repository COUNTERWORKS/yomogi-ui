import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from './Badge';

export default {
  title: 'YOMOGI-UI/Badge',
  component: Badge,
  args: {
    color: 'primary',
    children: 'badge',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'neutral', 'light', 'info', 'success', 'caution', 'error'],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Badge>;


const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  color: 'secondary',
};

export const Info = Template.bind({});

Info.args = {
  color: 'info',
};

export const Success = Template.bind({});

Success.args = {
  color: 'success',
};

export const Caution = Template.bind({});

Caution.args = {
  color: 'caution',
};

export const Error = Template.bind({});

Error.args = {
  color: 'error',
};

export const Neutral = Template.bind({});

Neutral.args = {
  color: 'neutral',
};

export const Light = Template.bind({});

Light.args = {
  color: 'light',
};
