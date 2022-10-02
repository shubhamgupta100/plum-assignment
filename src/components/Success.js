import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import '../styles/succes.scss';
const Success = () => {
  return (
    <Col className='vh-100 margin'>
      <Card className='bg-white shadow-sm mt-5'>
        <Card.Body>
          <Row>
            <Col md={12} className='text-center'>
              <i className="text-primary fs-1 bi bi-check-circle-fill"></i>
            </Col>
          </Row>
          <Row>
            <Col md={12} className=' text-center'>
              <p className='mb-0 title p-5'>
                Congratualtions !!!
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>

  );
};
export default Success;