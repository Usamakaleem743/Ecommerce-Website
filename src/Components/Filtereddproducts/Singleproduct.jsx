import React, { useState ,memo} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addtocart } from '../../Features/Slices/cartSlice';
import Form from 'react-bootstrap/Form';

const SingleProduct = () => {
  const product = useSelector(state => state.products.singleProduct)
  const { id } = useParams();
  const dispatch = useDispatch();
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  return (

    <Container >
      {product.filter(product => product.id === id).map((item, index) => {

        return (
          <Row key={index}  >
            <Col md={6} style={{marginTop:'6%'}}>
              <Card>
                <Card.Img className='zoom product-image' variant="top" style={{ width: '100%', height: '620px' }} src={item.img} alt="Product Image"  />
              </Card>
            </Col>
            <Col md={6} height='600px' style={{marginTop:'6%'}}>
              <Card height='600px' style={{ padding: '15% 7%' }}>
                <Card.Body >
                  <h1 style={{ textDecoration: 'none' }}>{item.name}</h1>
                  <h3 style={{ color: 'orange' }}>15% off Today</h3>
                  <Card.Text className='me-5'>
                    {item.text}
                  </Card.Text>
                  <Form.Select aria-label="Select Size" className='my-3' value={color} onChange={(e) => setColor(e.target.value)}>
                    <option active>Select Color</option>
                    {
                      item.color.map((color, index) => {
                        return (
                          <option value={color} key={index}>{color}</option>
                        )
                      })
                    }

                  </Form.Select>
                  <Form.Select aria-label="Select Size" className='my-3' value={size} onChange={e => setSize(e.target.value)}>
                    <option active>Select Size</option>
                    {
                      item.size.map((size, index) => {
                        return (
                          <option value={size} key={index}>{size}</option>
                        )
                      })
                    }
                  </Form.Select>
                  <h5 className='my-3'>Price : ${item.price}</h5>
                  <Button variant="success " className='my-3' onClick={() => {
                    return (dispatch(addtocart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      quantity: 1,
                      size: item.size,
                      color: color,
                      totalPrice: item.price,
                      img: item.img,
                      text: item.text
                    })), alert('Product Added Successfully'))
                  }

                  } >Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )
      })}

    </Container>
  );
};

export default memo(SingleProduct);
