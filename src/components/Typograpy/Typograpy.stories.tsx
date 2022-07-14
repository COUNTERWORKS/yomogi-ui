import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typograpy } from './Typograpy';

export default {
  title: 'YOMOGI-UI/Typography',
  component: Typograpy,
} as ComponentMeta<typeof Typograpy>;


const Template: ComponentStory<typeof Typograpy> = () => {
  return (
    <>
      <Typograpy as='h1' size="xlarge">typography</Typograpy>
      <Typograpy as='h2' size="large">typography</Typograpy>
      <Typograpy as='h3'>typography</Typograpy>
      <Typograpy as='h4' size="small">typography</Typograpy>
      <Typograpy as='h5' size="xsmall">typography</Typograpy>
    </>
  );
};

export const Default = Template.bind({});
