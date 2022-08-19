import { Story, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';
import { Typography } from '../Typography';
import { useTheme } from '../../hooks';

export default {
  title: 'YOMOGI-UI/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;


const Template: Story = () => {
  const theme = useTheme();
  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typography as="h3" size="small">
          justify
        </Typography>
        <p>start</p>
        <Flex justify="start" style={{ border: `1px solid ${theme.colors.border}`, height: '60px' }}>
          <div style={{ background: theme.colors.primary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.secondary.main, width: '100px', height: '30px' }}></div>
        </Flex>

        <p>end</p>
        <Flex justify="end" style={{ border: `1px solid ${theme.colors.border}`, height: '60px' }}>
          <div style={{ background: theme.colors.primary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.secondary.main, width: '100px', height: '30px' }}></div>
        </Flex>

        <p>center</p>
        <Flex justify="center" style={{ border: `1px solid ${theme.colors.border}`, height: '60px' }}>
          <div style={{ background: theme.colors.primary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.secondary.main, width: '100px', height: '30px' }}></div>
        </Flex>

        <p>space-between</p>
        <Flex justify="space-between" style={{ border: `1px solid ${theme.colors.border}`, height: '60px' }}>
          <div style={{ background: theme.colors.primary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.secondary.main, width: '100px', height: '30px' }}></div>
        </Flex>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography as="h3" size="small">
          align
        </Typography>
        <p>baseline</p>
        <Flex justify="center" align="baseline" style={{ border: `1px solid ${theme.colors.border}`, height: '60px' }}>
          <div style={{ background: theme.colors.primary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.secondary.main, width: '100px', height: '30px' }}></div>
        </Flex>

        <p>center</p>
        <Flex justify="center" align="center" style={{ border: `1px solid ${theme.colors.border}`, height: '60px' }}>
          <div style={{ background: theme.colors.primary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.secondary.main, width: '100px', height: '30px' }}></div>
        </Flex>

        <p>end</p>
        <Flex justify="center" align="end" style={{ border: `1px solid ${theme.colors.border}`, height: '60px' }}>
          <div style={{ background: theme.colors.primary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.secondary.main, width: '100px', height: '30px' }}></div>
        </Flex>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <Typography as="h3" size="small">
          gap
        </Typography>
        <p>gap: 1</p>
        <Flex justify="center" align="center" gap={1} style={{ border: `1px solid ${theme.colors.border}`, height: '60px' }}>
          <div style={{ background: theme.colors.primary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.secondary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.green[200], width: '100px', height: '30px' }}></div>
        </Flex>

        <p>gap: 2</p>
        <Flex justify="center" align="center" gap={2} style={{ border: `1px solid ${theme.colors.border}`, height: '60px' }}>
          <div style={{ background: theme.colors.primary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.secondary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.green[200], width: '100px', height: '30px' }}></div>
        </Flex>

        <p>gap: 3</p>
        <Flex justify="center" align="center" gap={3} style={{ border: `1px solid ${theme.colors.border}`, height: '60px' }}>
          <div style={{ background: theme.colors.primary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.secondary.main, width: '100px', height: '30px' }}></div>
          <div style={{ background: theme.colors.green[200], width: '100px', height: '30px' }}></div>
        </Flex>
      </div>
    </>
  );
};

export const All = Template.bind({});


