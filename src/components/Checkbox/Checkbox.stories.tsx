import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Checkbox } from './Checkbox';
import { CheckBlock } from '../CheckBlock';

export default {
  title: 'YOMOGI-UI/Form/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;


const Template: ComponentStory<typeof Checkbox> = () =>(
  <FormBlock label='好きな食べ物' hint="hint">
    <CheckBlock flex>
      <Checkbox id="apple" name="food" label="りんご" value="apple" />
      <Checkbox id="orange" label="オレンジ" name="food" value="orange" />
    </CheckBlock>
  </FormBlock>
);

export const Default = Template.bind({});


