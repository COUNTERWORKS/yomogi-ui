import { Story, ComponentMeta } from '@storybook/react';
import { FormBlock } from '../FormBlock';
import { Select } from './Select';
import { Typography } from '../Typography';
import { Flex } from '../Flex';

export default {
  title: 'YOMOGI-UI/Form/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: Story = () => {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">
          デフォルト
        </Typography>
        <FormBlock label="都道府県">
          <Select>
            <option value="1">北海道</option>
            <option value="2">青森県</option>
          </Select>
        </FormBlock>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">
          エラー
        </Typography>
        <FormBlock label="都道府県" errorMessage="選択してください">
          <Select isError>
            <option value="1">北海道</option>
            <option value="2">青森県</option>
          </Select>
        </FormBlock>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">
          disabled
        </Typography>
        <FormBlock label="都道府県">
          <Select disabled>
            <option value="1">北海道</option>
            <option value="2">青森県</option>
          </Select>
        </FormBlock>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">
          単位付き
        </Typography>
        <FormBlock label="時間">
          <Flex gap={2}>
            <Select unit="hour" style={{ width: '88px' }}>
              <option value="1">1</option>
              <option value="2">2</option>
            </Select>

            <Select unit="minute" style={{ width: '88px' }}>
              <option value="1">1</option>
              <option value="2">2</option>
            </Select>
          </Flex>
        </FormBlock>
      </div>
    </>
  );
};

export const All = Template.bind({});
