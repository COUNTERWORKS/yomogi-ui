import { ComponentMeta, Story } from '@storybook/react';
import { Button } from './Button';
import { Typograpy } from '../Typograpy';
import { Flex } from '../Flex';
import { Input } from '../Input';


export default {
  title: 'YOMOGI-UI/Button/Button',
  component: Button,
} as ComponentMeta<typeof Button>;


const Template: Story = () => {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">色一覧</Typograpy>
        <Flex gap={2}>
          <Button>primary</Button>
          <Button color='secondary'>secondary</Button>
          <Button color='neutral'>neutral</Button>
          <Button color='light'>light</Button>
          <Button color='danger'>danger</Button>
        </Flex>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">サイズ一覧</Typograpy>
        <div style={{ marginBottom: '8px' }}>
          <Flex gap={2}>
            <Button size="small">small</Button>
            <Button size="auto">auto</Button>
          </Flex>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <Flex gap={2}>
            <Button size="normal">normal</Button>
            <Button size="large">large</Button>
          </Flex>
        </div>
        <Button size='full'>full</Button>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">formAdjacent</Typograpy>
        <Flex gap={2}>
          <Input /><Button size="small" color="secondary" formAdjacent>送信</Button>
        </Flex>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">disabled</Typograpy>
        <Button size="normal" disabled>disabled</Button>
      </div>
    </>
  );
};


export const All = Template.bind({});
