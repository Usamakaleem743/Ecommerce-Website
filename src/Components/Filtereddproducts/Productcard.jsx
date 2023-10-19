import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { singleProduct } from '../../Features/Slices/productsSlice';
import { Link } from 'react-router-dom';
import { useState ,memo} from 'react';
import { addtocart } from '../../Features/Slices/cartSlice';
function Productcard({ id, name, text, type, price, img, color, size }) {
  const dispatch = useDispatch();
  const [ncolor, setColor] = useState(color);
  const [nsize] = useState(size);
  return (

    <Card onClick={() => dispatch(singleProduct(id))} style={{ width: '18rem', textDecoration: 'none !important' }} key={id}>
      <Link to={`/products/:${type}/` + id} style={{ textDecoration: 'none' }}>
        <Card.Img variant="top" src={img} height={'350px'} />
      </Link>
      <Card.Body>
        <Link to={`/products/:${type}/` + id} style={{ textDecoration: 'none', color: 'black' }}>
          <Card.Title>{name}</Card.Title>
        </Link>
        <Card.Text>{text.slice(0, 95)}... </Card.Text>
        <div className="d-flex justify-content-between" style={{ border: '1px solid lightgray', padding: '5px' }}>
          <Card.Subtitle className="my-1 " style={{ fontSize: '18px' }}> ${price}</Card.Subtitle>
          <span className='d-flex' value={ncolor} onClick={(e) => setColor(e.target.value)}>
            {color.map((color, index) => {
              return (
                <i key={index} value={color} className='p-2 m-2' style={{ backgroundColor: color, height: 'auto', borderRadius: '20px', cursor: 'pointer' }}></i>
              )
            })}

          </span>
        </div>
        <button className='btn btn-success w-100 mt-2'
          onClick={() => {
            return (dispatch(addtocart({
              id, name, price, size: nsize[0], color: ncolor[0], img, text, quantity: 1, totalPrice: price
            })), alert('Product Added Successfully'))
          }}
        >Add to cart</button> 
      </Card.Body>
    </Card>

  );
}

export default memo(Productcard);