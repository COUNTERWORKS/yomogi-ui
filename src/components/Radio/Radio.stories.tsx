import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Radio } from './Radio';
import { RadioBlock } from '../RadioBlock';

export default {
  title: 'YOMOGI-UI/Form/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;


const Template: ComponentStory<typeof Radio> = () =>(
  <FormBlock label='好きな食べ物' hint="hint">
    <RadioBlock flex>
      <Radio id="apple" name="food" label="りんご" value="apple" />
      <Radio id="orange" label="オレンジ" name="food" value="orange" />
    </RadioBlock>
  </FormBlock>
);

export const Default = Template.bind({});


