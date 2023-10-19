import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { removefromcart } from '../../Features/Slices/cartSlice'
const CartModel = ({ handleShow, openmodel }) => {
  const cartProducts = useSelector(state => state.cart.cart);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch()
  return (
    <>
      <Modal show={openmodel} onHide={handleShow(false)}  >
        <Modal.Header closeButton>
          <Modal.Title>Cart Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartProducts.map((item, index) => {
            return (
              <div className="row mb-2 border-bottom" key={index} >
                <div className="col-3">
                  <img src={item.img} alt={item.name} style={{ width: '80px', height: '100px' }} />
                </div>
                <div className="col-9">
                  <div className='d-flex justify-content-between'>
                    <h5>{item.name}</h5>
                    <h6>Price : ${item.price}</h6>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <h6>Size : {item.size}</h6>
                    <span>
                      <i className='p-2 rounded-circle d-flex' style={{ backgroundColor: item.color, fontSize: '0px' }}></i>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Quantity : {item.quantity}</h6>
                    <button onClick={() => dispatch(removefromcart(item))} className='btn btn-sm btn-danger'>Remove</button>
                  </div>
                </div>
              </div>
            )
          })}

        </Modal.Body>
        <Modal.Footer>
          <h6>Total Price : ${totalPrice}</h6>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default CartModel;