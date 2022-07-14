import { Story, ComponentMeta } from '@storybook/react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './';
import { useToggle } from 'react-use';
import { Button } from '../Button';
import { Typograpy } from '../Typograpy';
import { Flex } from '../Flex';
import React from 'react';

export default {
  title: 'YOMOGI-UI/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Text = () => (
  <>
    {new Array(100).fill(0).map((_, index) => <React.Fragment key={index}>よもぎちゃん可愛い<br /></React.Fragment>)}
  </>
);


const Template: Story = () => {
  const [isOpenSmallModal, toggleSmallModal] = useToggle(false);
  const [isOpenMediumModal, toggleMediumModal] = useToggle(false);
  const [isOpenLargeModal, toggleLargeModal] = useToggle(false);
  const [isOpenFullModal, toggleFullModal] = useToggle(false);
  return (
    <div>
      <Typograpy as="p" size="small">all</Typograpy>
      <div style={{ marginBottom: '8px' }}>
        <Flex gap={2}>
          <Button onClick={toggleSmallModal}>small</Button>
          <Button onClick={toggleMediumModal}>medium</Button>
        </Flex>
      </div>

      <div style={{ marginBottom: '8px' }}>
        <Flex gap={2}>
          <Button onClick={toggleLargeModal}>large</Button>
          <Button onClick={toggleFullModal}>full</Button>
        </Flex>
      </div>


      <Modal isOpen={isOpenSmallModal} size="small" onClose={toggleSmallModal}>
        <ModalHeader onClose={toggleSmallModal}>hoge</ModalHeader>
        <ModalBody><Text /></ModalBody>
        <ModalFooter justify='end'><Button>ok</Button></ModalFooter>
      </Modal>

      <Modal isOpen={isOpenMediumModal} size="medium" onClose={toggleMediumModal}>
        <ModalHeader onClose={toggleMediumModal}>hoge</ModalHeader>
        <ModalBody><Text /></ModalBody>
        <ModalFooter justify='end'><Button>ok</Button></ModalFooter>
      </Modal>

      <Modal isOpen={isOpenLargeModal} size="large" onClose={toggleLargeModal}>
        <ModalHeader onClose={toggleLargeModal}>hoge</ModalHeader>
        <ModalBody><Text /></ModalBody>
        <ModalFooter justify='end'><Button>ok</Button></ModalFooter>
      </Modal>

      <Modal isOpen={isOpenFullModal} size="full" onClose={toggleFullModal}>
        <ModalHeader onClose={toggleFullModal}>hoge</ModalHeader>
        <ModalBody><Text /></ModalBody>
        <ModalFooter justify='end'><Button>ok</Button></ModalFooter>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
