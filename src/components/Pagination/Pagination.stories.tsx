import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from './Pagination';
import { Typograpy } from '../Typograpy';

export default {
  title: 'YOMOGI-UI/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;


const Template: ComponentStory<typeof Pagination> = () => {
  const [page, setPage] = useState(50);

  return (
    <>
      <div style={{ marginBottom: '24px' }}>
        <Typograpy as="p" size="small">ALL</Typograpy>
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

    </>
  );
};


export const Default = Template.bind({});


