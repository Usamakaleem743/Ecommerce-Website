import React, { useMemo,memo } from 'react'
import { filteredProducts } from '../../Features/Slices/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { storeData } from '../../Assets/data/dummyData'
import Productcard from '../Filtereddproducts/Productcard'


const Categories = () => {
  const dispatch = useDispatch()
  const sProducts=useSelector(state=>state.products.searchProducts);
  const Pproducts= useMemo(()=> sProducts.slice(0,8),[sProducts]);  
  const shuffleproducts =useMemo(()=> storeData.sort(() => 0.5 - Math.random()).slice(0,8),[]);
  const categories = ["Hoodies", 'Dresses', 'Suits', 'Shoes', 'T-Shirts', 'Jeans', 'Jackets', ]
  return (
    <>
      <div className='d-flex justify-content-center align-item-center flex-wrap pt-5'>
        {categories.map((type, index) => {
          return (
            <div key={index} >
              <Link to={'/products/' + type}>
                <button className='btn btn-outline-dark btn-lg m-3' onClick={() => dispatch(filteredProducts(type))}>{type}</button>
              </Link>
            </div>
          )
        })}
      </div>
      <div className="p-5 mx-auto">
        <h3 style={{ backgroundColor: 'black', color: 'white', padding: '5px', width: '45%', margin: 'auto', borderRadius: '10px', textAlign:'center' }}>Featured Products</h3>
      </div>

      <div className=" "> 
        <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
          { Pproducts.length>0 ?
            Pproducts.map((product, index) => {
              return (
                <div key={index}>
                  <Productcard id={product.id}  name={product.name} text={product.text} color={product.color} size={product.size} type={product.type} price={product.price} img={product.img} />
                </div>
              )
            }):
            shuffleproducts.map((product, index) => {
              return (
                <div key={index}>
                  <Productcard id={product.id}  name={product.name} text={product.text} color={product.color} size={product.size} type={product.type} price={product.price} img={product.img} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default memo(Categories)