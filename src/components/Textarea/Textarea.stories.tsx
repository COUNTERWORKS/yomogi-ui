import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Textarea } from './Textrarea';
import { Typography } from '../Typography';

export default {
  title: 'YOMOGI-UI/Form/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;


const Template: ComponentStory<typeof Textarea> = () => {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">デフォルト</Typography>
        <FormBlock label='詳細'>
          <Textarea />
        </FormBlock>
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">エラー時</Typography>
        <FormBlock label='詳細' errorMessage="入力してください">
          <Textarea isError />
        </FormBlock>
      </div>
    </>

  );
};

export const All = Template.bind({});
