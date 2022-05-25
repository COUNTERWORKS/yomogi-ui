import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from './Alert';

export default {
  title: 'YOMOGI-UI/Alert',
  component: Alert,
  args: {
    color: 'success',
    showCloseButton: false,
    children: 'alert',
    onClickCloseButton: () => {
      console.log('click');
    },
  },
  argTypes: {
    color: {
      options: ['info', 'success', 'caution', 'error'],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Alert>;


const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

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

