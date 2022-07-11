import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './';
import { useToggle } from 'react-use';
import { Button } from '../Button';

export default {
  title: 'YOMOGI-UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;


const Template: ComponentStory<typeof Modal> = () => {
  const [on, toggle] = useToggle(false);
  return (
    <div>
      <Button color="primary" onClick={toggle}>open modal</Button>
      <Modal isOpen={on} size="medium" onClose={toggle}>
        <ModalHeader onClose={toggle}>hoge</ModalHeader>
        <ModalBody>hogehogeae<br />ogehogeae<br />ogehogeae<br />ogehogeae<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />ogehogeae<br />ogehogeae<br />ogehogeae<br />ogehogeae<br />ogehogeae<br />ogehogeae<br />ogehogeae<br />ogehogeae<br />ogehogeae<br />ogehogeae<br />ogehogeae<br />ogehogeae<br />ogehogeae<br />ogfaefeehogeae<br /></ModalBody>
        <ModalFooter justifyContent='end'><Button>hogehoge</Button></ModalFooter>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
