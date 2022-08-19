import { ComponentMeta, Story } from '@storybook/react';
import { Button } from './Button';
import { Typography } from '../Typography';
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
        <Typography as="p" size="small">色一覧</Typography>
        <Flex gap={2}>
          <Button>primary</Button>
          <Button color='secondary'>secondary</Button>
          <Button color='neutral'>neutral</Button>
          <Button color='light'>light</Button>
          <Button color='danger'>danger</Button>
        </Flex>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">サイズ一覧</Typography>
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
        <Typography as="p" size="small">formAdjacent</Typography>
        <Flex gap={2}>
          <Input /><Button size="small" color="secondary" formAdjacent>送信</Button>
        </Flex>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">disabled</Typography>
        <Button size="normal" disabled>disabled</Button>
      </div>
    </>
  );
};


export const All = Template.bind({});
