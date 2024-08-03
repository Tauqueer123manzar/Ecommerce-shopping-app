import React from 'react'
import products from '../../products'
import {Container,Row,Col} from 'react-bootstrap'
import Productscreen from './Productscreen'
const Homepage = () => {
  return (
   <>
    <Container>
      <Row>
         {
            products.map((product)=>(
                <Col key={product._id} sm={12} md={6} lg={6} xl={3}>
                   <Productscreen product={product}/>
                </Col>
            ))
         }
      </Row>
    </Container>
   </>
  )
}

export default Homepage
