import React from 'react';
import { Centered } from '../ui/centered';
import { Paper } from '../ui/paper';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { VerticalSpacer } from '../ui/spacers';
import { CardListItem } from './card-list-item';
import { Accents } from '../ui/accent';
import { Link } from '../ui/elements';
import me from '../../images/me.jpg';
import { FaMagic } from 'react-icons/fa';
export const BusinessCard: React.FunctionComponent = () => (
  <Paper shadow>
    <Container>
      <Row>
        <Col>
          <img style={{ borderRadius: '5px' }} src={me} height={500} />
        </Col>
        <Col style={{ padding: 30 }}>
          <div style={{}}>
            <VerticalSpacer sm />
            <h2>James DiRosa</h2>
            <span style={{ fontWeight: 600, fontSize: 24, color: '#999' }}>
              <Accents.Purple>
                Code Magician{' '}
                <FaMagic style={{ paddingLeft: 6, fontSize: 30 }} />
              </Accents.Purple>
            </span>
            <p>
              The online resume of James DiRosa. An amazing, full stack
              developer. A passionate student, teacher, and lover of the
              development career path. A professional coder and hobbyist hacker.
            </p>

            <Link href="mailto:jdirosa@gmail.com">
              <CardListItem type={'Email'}>JDiRosa@Gmail.com</CardListItem>
            </Link>
            <Link href="https://github.com/jdirosa" target="_blank">
              <CardListItem type={'Git'}>GitHub</CardListItem>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </Paper>
);
