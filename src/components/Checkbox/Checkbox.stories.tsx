import { Story, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Checkbox } from './Checkbox';
import { Flex } from '../Flex';
import { Typograpy } from '../Typograpy';

export default {
  title: 'YOMOGI-UI/Form/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;


const Template: Story = () => {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">デフォルト</Typograpy>
        <FormBlock label='好きな食べ物'>
          <Flex>
            <Checkbox id="apple" name="food" label="りんご" value="apple" />
            <Checkbox id="orange" label="オレンジ" name="food" value="orange" />
          </Flex>
        </FormBlock>
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">エラー</Typograpy>
        <FormBlock label='好きな食べ物' errorMessage='エラーが発生しました'>
          <Flex>
            <Checkbox id="apple-2" name="food-2" label="りんご" value="apple" />
            <Checkbox id="orange-2" label="オレンジ" name="food-2" value="orange" />
          </Flex>
        </FormBlock>
      </div>
    </>
  );
};


export const All = Template.bind({});


