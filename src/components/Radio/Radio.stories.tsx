import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Radio } from './Radio';
import { Flex } from '../Flex';

export default {
  title: 'YOMOGI-UI/Form/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;


const Template: ComponentStory<typeof Radio> = () => {
  return (
    <FormBlock label='好きな食べ物' hint="hint">
      <Flex onChange={(e) => {
        const { value } = e.target as any;
        console.log(value);
      }}>
        <Radio id="apple" name="food" label="りんご" value="apple" />
        <Radio id="orange" label="オレンジ" name="food" value="orange" />
      </Flex>
    </FormBlock>
  );
};


export const Default = Template.bind({});


