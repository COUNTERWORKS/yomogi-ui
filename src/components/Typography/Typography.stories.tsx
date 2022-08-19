import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './Typography';

export default {
  title: 'YOMOGI-UI/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;


const Template: ComponentStory<typeof Typography> = () => {
  return (
    <>
      <Typography as='h1' size="xlarge">typography</Typography>
      <Typography as='h2' size="large">typography</Typography>
      <Typography as='h3'>typography</Typography>
      <Typography as='h4' size="small">typography</Typography>
      <Typography as='h5' size="xsmall">typography</Typography>
    </>
  );
};

export const Default = Template.bind({});
