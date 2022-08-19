import { Story, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Radio } from './Radio';
import { Flex } from '../Flex';
import { Typography } from '../Typography';

export default {
  title: 'YOMOGI-UI/Form/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;


const Template: Story = () => {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">デフォルト</Typography>
        <FormBlock label='好きな食べ物'>
          <Flex onChange={(e) => {
            const { value } = e.target as any;
            console.log(value);
          }}>
            <Radio id="apple" name="food" label="りんご" value="apple" />
            <Radio id="orange" label="オレンジ" name="food" value="orange" />
          </Flex>
        </FormBlock>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">エラー</Typography>
        <FormBlock label='好きな食べ物' errorMessage='選択してください'>
          <Flex onChange={(e) => {
            const { value } = e.target as any;
            console.log(value);
          }}>
            <Radio id="apple-2" name="food-2" label="りんご" value="apple" />
            <Radio id="orange-2" label="オレンジ" name="food-2" value="orange" />
          </Flex>
        </FormBlock>
      </div>

    </>
  );
};


export const All = Template.bind({});


