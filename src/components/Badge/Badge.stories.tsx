import { Story, ComponentMeta } from '@storybook/react';
import { Badge } from './Badge';
import { Typography } from '../Typography';
import { Flex } from '../Flex';


export default {
  title: 'YOMOGI-UI/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;


const Template: Story = () => {
  return (
    <div>
      <Typography as="h3" size="small">色一覧</Typography>
      <Flex gap={1}>
        <Badge color="primary">primary</Badge>
        <Badge color="secondary">secondary</Badge>
        <Badge color="info">info</Badge>
        <Badge color="success">success</Badge>
        <Badge color="caution">caution</Badge>
        <Badge color="error">error</Badge>
        <Badge color="neutral">neutral</Badge>
        <Badge color="light">light</Badge>
      </Flex>
    </div>
  );
};

export const All = Template.bind({});
