import { createSlice } from "@reduxjs/toolkit";
import { storeData } from '../../Assets/data/dummyData'
export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    filteredProducts: JSON.parse(localStorage.getItem('Products')) || storeData,
    singleProduct: JSON.parse(localStorage.getItem('SingleProduct')) || storeData,
    searchProducts: []
  },
  reducers: {
    filteredProducts(state, action) {
      const filter = storeData.filter((product) => product.type === action.payload);
      state.filteredProducts = filter;
      const savedata = JSON.stringify(filter);
      localStorage.setItem('Products', savedata)
    },
    singleProduct(state, action) {
      const oneProduct = storeData.filter((product) => product.id === action.payload)
      state.singleProduct = oneProduct
      const savedata = JSON.stringify(oneProduct);
      localStorage.setItem('SingleProduct', savedata)
    },
    filterGender(state, action) {
      const gender = state.filteredProducts.filter(product => product.gender === action.payload);
      state.filteredProducts = gender;
      if (gender.length > 0) {
        const savedata = JSON.stringify(gender);
        localStorage.setItem('Products', savedata)
      } else {
        state.errors = true;
        state.filteredProducts = []
      }
    },
    sortbyLowprice(state) {
      const price = state.filteredProducts.sort((a, b) =>
        a.price > b.price ? 1 : -1
      )
      if (price.length > 1) {
        state.filteredProducts = price;
        const savadata = JSON.stringify(price);
        localStorage.setItem('Products', savadata)

      } else {
        state.filteredProducts = []
      }
    },
    sortbyColor(state, action) {
      const color = state.filteredProducts.filter(product => product.color.includes(action.payload));

      if (color.length > 0) {
        state.filteredProducts = color;
        const savedata = JSON.stringify(color);
        localStorage.setItem('Products', savedata)
      } else {
        state.filteredProducts = []
      }
    },
    sortbySize(state, action) {
      const size = state.filteredProducts.filter(product => product.size.includes(action.payload));
      if (size.length > 0) {
        state.filteredProducts = size;
        const savadata = JSON.stringify(size);
        localStorage.setItem('Products', savadata)
      } else {
        state.filteredProducts = []
      }
    },
    searchProduct(state, action) {
      const filter = storeData.filter(state => state.name.toLowerCase().includes(action.payload))
      state.searchProducts = filter
    }
  }
})
export const { filteredProducts, singleProduct, filterGender, sortbyLowprice, sortbyColor, sortbySize, searchProduct } = ProductSlice.actions;
export default ProductSlice.reducer