import { Story, ComponentMeta } from '@storybook/react';
import { Alert } from './Alert';
import { Typograpy } from '../Typograpy';

export default {
  title: 'YOMOGI-UI/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: Story = () => {
  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">色一覧</Typograpy>
        <Alert color="info">info</Alert>
        <Alert color="success">success</Alert>
        <Alert color="caution">caution</Alert>
        <Alert color="error">error</Alert>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">閉じるボタンがある時</Typograpy>
        <Alert color="info" onClick={() => console.log('click')} showCloseButton>with close button</Alert>
      </div>
    </div>
  );
};

export const All = Template.bind({});
