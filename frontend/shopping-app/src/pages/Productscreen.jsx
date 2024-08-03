import React from 'react';
import Card from 'react-bootstrap/Card';

const Productscreen = ({ product }) => {
  return (
    <>
       <Card>
       <a href={`/product/${product._id}`}>
        <Card.Img  style={{textDecoration:"none",listStyle:"none"}} variant='top' src={product.image}/>
       </a>
       <Card.Body>
         <a href={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
        </a>
          <Card.Text as="div">
            <div className='my-3'>
               {product.rating} from {product.numReviews}
            </div>
          </Card.Text>
          <Card.Text as="div">
            <div className='my-3'>
            ${product.price}
            </div>
          </Card.Text>
       </Card.Body>
      </Card>
    </>
  );
}

export default Productscreen;
