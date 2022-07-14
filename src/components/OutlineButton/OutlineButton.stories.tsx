import { ComponentMeta, Story } from '@storybook/react';
import { OutlineButton } from './OutlineButton';
import { Typograpy } from '../Typograpy';
import { Flex } from '../Flex';
import { Input } from '../Input';


export default {
  title: 'YOMOGI-UI/Button/OutlineButton',
  component: OutlineButton,
} as ComponentMeta<typeof OutlineButton>;


const Template: Story = () => {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">色一覧</Typograpy>
        <Flex gap={2}>
          <OutlineButton>primary</OutlineButton>
          <OutlineButton color='secondary'>secondary</OutlineButton>
          <OutlineButton color='neutral'>neutral</OutlineButton>
          <OutlineButton color='danger'>danger</OutlineButton>
        </Flex>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">サイズ一覧</Typograpy>
        <div style={{ marginBottom: '8px' }}>
          <Flex gap={2}>
            <OutlineButton size="small">small</OutlineButton>
            <OutlineButton size="auto">auto</OutlineButton>
          </Flex>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <Flex gap={2}>
            <OutlineButton size="normal">normal</OutlineButton>
            <OutlineButton size="large">large</OutlineButton>
          </Flex>
        </div>
        <OutlineButton size='full'>full</OutlineButton>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">formAdjacent</Typograpy>
        <Flex gap={2}>
          <Input /><OutlineButton size="small" color="secondary" formAdjacent>送信</OutlineButton>
        </Flex>
      </div>
    </>
  );
};


export const All = Template.bind({});
