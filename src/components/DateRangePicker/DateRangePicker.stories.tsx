import { Story, ComponentMeta } from '@storybook/react';
import { DateRangePicker } from './DateRangePicker';
import { Typography } from '../Typography';
import { Input } from '../Input';
import { Flex } from '../Flex';
import { FormBlock } from '../FormBlock';

export default {
  title: 'YOMOGI-UI/DateRangePicker',
  component: DateRangePicker,
} as ComponentMeta<typeof DateRangePicker>;

const Template: Story = () => {
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <FormBlock>
          <Typography as="p" size="small">
            デフォルト
          </Typography>
          <DateRangePicker
            renderInput={({ startProps, endProps }) => (
              <Flex gap={4}>
                <Input {...startProps} />
                <Input {...endProps} />
              </Flex>
            )}
          />
        </FormBlock>
        <FormBlock>
          <Typography as="p" size="small">
            ２ヶ月表示ver
          </Typography>
          <DateRangePicker
            numberOfMonths={2}
            renderInput={({ startProps, endProps }) => (
              <Flex gap={4}>
                <Input {...startProps} />
                <Input {...endProps} />
              </Flex>
            )}
          />
        </FormBlock>
        <FormBlock>
          <Typography as="p" size="small">
            minDate(2023-01-10)設定
          </Typography>
          <DateRangePicker
            minDate="2023/01/10"
            renderInput={({ startProps, endProps }) => (
              <Flex gap={4}>
                <Input {...startProps} />
                <Input {...endProps} />
              </Flex>
            )}
          />
        </FormBlock>
        <FormBlock>
          <Typography as="p" size="small">
            minDate(2023-01-10) maxDate (2023-06-26)設定
          </Typography>
          <DateRangePicker
            minDate="2023/01/10"
            maxDate="2023/06/27"
            renderInput={({ startProps, endProps }) => (
              <Flex gap={4}>
                <Input {...startProps} />
                <Input {...endProps} />
              </Flex>
            )}
          />
        </FormBlock>
        <FormBlock>
          <Typography as="p" size="small">
            初期値あり
          </Typography>
          <DateRangePicker
            defaultStartDate="2022/01/05"
            defaultEndDate="2022/01/10"
            renderInput={({ startProps, endProps }) => (
              <Flex gap={4}>
                <Input {...startProps} />
                <Input {...endProps} />
              </Flex>
            )}
          />
        </FormBlock>

        <FormBlock>
          <Typography as="p" size="small">
            noMargin
          </Typography>
          <DateRangePicker
            noMargin
            noBorder
            renderInput={({ startProps, endProps }) => (
              <Flex gap={4}>
                <Input {...startProps} />
                <Input {...endProps} />
              </Flex>
            )}
          />
        </FormBlock>

        <FormBlock>
          <Typography as="p" size="small">
            default open
          </Typography>
          <DateRangePicker noMargin noBorder opened renderInput={() => <></>} absolute={false} />
        </FormBlock>
      </div>
    </>
  );
};

export const All = Template.bind({});
