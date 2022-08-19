import { Story, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Input } from './Input';
import { Typography } from '../Typography';

export default {
  title: 'YOMOGI-UI/Form/Input',
  component: Input,
} as ComponentMeta<typeof Input>;


const Template: Story = () => {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">デフォルト</Typography>
        <FormBlock label='名前'><Input /></FormBlock>
        <FormBlock label='email' hint="メールアドレスを入力してください"><Input /></FormBlock>
        <FormBlock label='password' hint="8文字以上で入力してください"><Input type="password"/></FormBlock>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">エラー</Typography>
        <FormBlock label='名前' errorMessage='入力してください'><Input isError /></FormBlock>
        <FormBlock label='email' hint="メールアドレスを入力してください" errorMessage='入力してください'><Input isError/></FormBlock>
        <FormBlock label='password' hint="8文字以上で入力してください" errorMessage='入力してください'><Input type="password" isError/></FormBlock>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">disabled</Typography>
        <FormBlock label='名前'><Input disabled /></FormBlock>
        <FormBlock label='email' hint="メールアドレスを入力してください"><Input disabled /></FormBlock>
        <FormBlock label='password' hint="8文字以上で入力してください"><Input type="password" disabled /></FormBlock>
      </div>

    </>
  );
};

export const All = Template.bind({});
