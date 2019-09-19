import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { CardListItem } from '../hero/card-list-item';
import { LinkDark } from '../ui/elements';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  onHide: () => void;
}
export const ContactMe: React.FunctionComponent<Props> = ({
  isOpen,
  onHide,
}) => {
  return (
    <Modal centered show={isOpen} onHide={onHide} animation size="lg">
      <Body>
        <h3>Contact Me</h3>
        <p>
          I'm currently not looking for freelance work (unless this is regarding
          the "Giving Back" section), however if you have something super
          interesting, I'm always open for discussion!
        </p>
        <LinkDark href="mailto:jdirosa@gmail.com">
          <CardListItem type="Email">JDiRosa@Gmail.com</CardListItem>
        </LinkDark>
      </Body>
    </Modal>
  );
};

const Body = styled(Modal.Body)`
  padding: 60px;
`;
