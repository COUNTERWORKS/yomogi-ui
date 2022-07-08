import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'YOMOGI-UI/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;


const Template: ComponentStory<typeof Pagination> = () => {
  const [page, setPage] = useState(1);

  return (
    <Pagination currentPage={page} lastPage={1000} onChange={(page) => {
      setPage(page);
    }} gap={2}/>
  );
};


export const Default = Template.bind({});


