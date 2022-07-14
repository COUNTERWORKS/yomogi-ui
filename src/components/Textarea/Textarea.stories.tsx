import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Textarea } from './Textrarea';
import { Typograpy } from '../Typograpy';

export default {
  title: 'YOMOGI-UI/Form/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;


const Template: ComponentStory<typeof Textarea> = () => {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">デフォルト</Typograpy>
        <FormBlock label='詳細'>
          <Textarea />
        </FormBlock>
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">エラー時</Typograpy>
        <FormBlock label='詳細' errorMessage="入力してください">
          <Textarea isError />
        </FormBlock>
      </div>
    </>

  );
};

export const All = Template.bind({});
