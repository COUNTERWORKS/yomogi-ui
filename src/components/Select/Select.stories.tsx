import { Story, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Select } from './Select';
import { Typograpy } from '../Typograpy';

export default {
  title: 'YOMOGI-UI/Form/Select',
  component: Select,
} as ComponentMeta<typeof Select>;


const Template: Story = () => {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">デフォルト</Typograpy>
        <FormBlock label='都道府県'>
          <Select>
            <option value="1">
            北海道
            </option>
            <option value="2">
            青森県
            </option>
          </Select>
        </FormBlock>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">エラー</Typograpy>
        <FormBlock label='都道府県' errorMessage="選択してください">
          <Select isError>
            <option value="1">
            北海道
            </option>
            <option value="2">
            青森県
            </option>
          </Select>
        </FormBlock>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">disabled</Typograpy>
        <FormBlock label='都道府県'>
          <Select disabled>
            <option value="1">
            北海道
            </option>
            <option value="2">
            青森県
            </option>
          </Select>
        </FormBlock>
      </div>

    </>
  );
};


export const All = Template.bind({});

