import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from './Pagination';
import { Typography } from '../Typography';

export default {
  title: 'YOMOGI-UI/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;


const Template: ComponentStory<typeof Pagination> = () => {
  const [page, setPage] = useState(50);

  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typography as="p" size="small">ALL</Typography>
        <p>gap: 1</p>
        <Pagination
          currentPage={page}
          lastPage={1000}
          onChange={(page) => {
            setPage(page);
          }}
          gap={1}
        />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <p>gap: 2</p>
        <Pagination
          currentPage={page}
          lastPage={1000}
          onChange={(page) => {
            setPage(page);
          }}
          gap={2}
        />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <p>gap: 3</p>
        <Pagination
          currentPage={page}
          lastPage={1000}
          onChange={(page) => {
            setPage(page);
          }}
          gap={3}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p>gap: 3, enable anchorHrefRouterParams option</p>
        <Pagination
          currentPage={page}
          lastPage={1000}
          onChange={(page) => {
            setPage(page);
          }}
          gap={3}
          enabledAnchorHref
          anchorHrefParams={
            {
              pathname: `https://shopcounter.jp/prefectures/tokyo?page={pageParams}`,
              replaceTarget: 'pageParams',
            }
          }
        />
      </div>

    </>
  );
};


export const Default = Template.bind({});


