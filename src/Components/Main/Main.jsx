import React, { memo } from 'react'
import Slider from '../Slider/Slider'
import Categories from '../Categories/Categories'
const Main = () => {
  return (
    <>
    <Slider></Slider>
    <Categories/>
    </>
  )
}

export default  memo(Main)