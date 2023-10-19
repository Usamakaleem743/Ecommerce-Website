import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Productcard from './Productcard'
import Dropdown from 'react-bootstrap/Dropdown';
import { filteredProducts, filterGender, sortbyLowprice, sortbyColor, sortbySize } from '../../Features/Slices/productsSlice'
const FilteredProducts = () => {
  const dispatch = useDispatch();
  const searchProducts = useSelector(state => state.products.searchProducts)
  const products = useSelector((state) => state.products.filteredProducts)
  const { type } = useParams();
  const gender = ['male', 'female'];
  const colors = ['red', 'green', 'yellow', 'black', 'brown', 'pink', 'purple', 'white'];
  const sizes = ['S', 'M', 'L', 'XL']
  return (
    <>
      <div className="container">
        <div className="row">
          <>
            <h1 className=' pt-5 mt-5'>{type}</h1>
            <div className='d-flex justify-content-between item-center py-3'>
              <div className="d-flex item-center gap-3">
                {gender.map((item, index) =>
                  <div key={index}>
                    <button onClick={() => dispatch(filterGender(item))} className='btn btn-outline-dark'>{item}</button>
                  </div>
                )}
                <div>
                  <button onClick={() => dispatch(sortbyLowprice())} className='btn btn-outline-dark'>Low Price</button>
                </div>
                <div className='colors'>
                  <Dropdown className='gap-2'>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                      Select a Color
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {colors.map((item, index) =>
                        <Dropdown.Item onClick={() => dispatch(sortbyColor(item))} key={index} value={item}>{item}</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className='sizes'>
                  <Dropdown className='gap-2'>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                      Select a Size
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {sizes.map((item, index) =>
                        <Dropdown.Item onClick={() => dispatch(sortbySize(item))} key={index} value={item}>{item}</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div>
                <button onClick={() => dispatch(filteredProducts(type))} className='btn btn-outline-dark'>Clear Filters</button>
              </div>
            </div>

            <div className="d-flex flex-wrap align-item-center justify-content-center gap-5 py-3"  >
              {searchProducts.length > 0 ?
                searchProducts.filter((product) => product.type === type)
                  .map((product, index) => {
                    return (
                      <div key={index}>
                        <Productcard id={product.id} name={product.name} type={type} text={product.text} img={product.img} size={product.size} price={product.price} color={product.color} />
                      </div>
                    )
                  }) :
                products.filter((product) => product.type === type)
                  .map((product, index) => {
                    return (
                      <div key={index}>
                        <Productcard id={product.id} name={product.name} type={type} text={product.text} img={product.img} size={product.size} price={product.price} color={product.color} />
                      </div>
                    )
                  })
              }
            </div>
          </>
        </div>
      </div>
    </>
  )
};

export default memo(FilteredProducts)