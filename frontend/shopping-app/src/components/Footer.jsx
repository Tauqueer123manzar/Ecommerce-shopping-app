import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <>
            <footer>
               <Container>
                <Row>
                   <Col md={12} className='text-center'>
                      <span>
                         Copyright &copy; Techinfo solution
                      </span>
                   </Col>
                </Row>
               </Container>
            </footer>
        </>
    )
}

export default Footer
