import { Story, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Input } from './Input';
import { Typograpy } from '../Typograpy';

export default {
  title: 'YOMOGI-UI/Form/Input',
  component: Input,
} as ComponentMeta<typeof Input>;


const Template: Story = () => {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">デフォルト</Typograpy>
        <FormBlock label='名前'><Input /></FormBlock>
        <FormBlock label='email' hint="メールアドレスを入力してください"><Input /></FormBlock>
        <FormBlock label='email' hint="8文字以上で入力してください"><Input type="password"/></FormBlock>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">エラー</Typograpy>
        <FormBlock label='名前' errorMessage='入力してください'><Input isError /></FormBlock>
        <FormBlock label='email' hint="メールアドレスを入力してください" errorMessage='入力してください'><Input isError/></FormBlock>
        <FormBlock label='email' hint="8文字以上で入力してください" errorMessage='入力してください'><Input type="password" isError/></FormBlock>
      </div>

    </>
  );
};

export const All = Template.bind({});
