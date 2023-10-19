import Badge from 'react-bootstrap/Badge'
import { BsCartFill } from 'react-icons/bs'
import CartModel from '../Cart/CartModel';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../../Features/Slices/productsSlice'
function TopNavbar() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const quantity = useSelector(state => state.cart.totalQuantity)
  return (
    <>
      <div className="container-fluid d-flex justify-content-between align-item-center bg-dark text-light px-5 py-2 " style={{position:'fixed',zIndex:'1000'}}>
        
        <h3> <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Shooping Store</Link></h3>
        <div><input type='text' onChange={(e) => dispatch(searchProduct(e.target.value))} style={{ width: '350px' }} placeholder='Search...' className='form-control me-5' /></div>

        <Link onClick={() => handleShow()} href="" className='ms-5 text-light'><BsCartFill style={{ fontSize: '25px' }} /><Badge bg="dark" pill>{quantity}</Badge></Link>
      </div>
      <div>{show && <CartModel openmodel={show} handleShow={() => setShow} />}</div>
    </>
  );
}

export default memo(TopNavbar)