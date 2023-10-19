import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    quantity: 0,
    totalQuantity: 0,
    totalPrice: 0
  },
  reducers: {
    addtocart: (state, action) => {
      const productID = action.payload;
      const existingProduct = findProduct(state.cart, productID);

      if (existingProduct) {
        incrementProduct(state, existingProduct, productID);
      } else {
        addNewProduct(state, state.cart, productID);
      }
    },
    removefromcart: (state, action) => {
      const productID = action.payload;
      const existingProduct = findProduct(state.cart, productID);

      if (existingProduct.quantity === 1) {
        removeProduct(state, state.cart, productID);
      } else {
        decrementProduct(state, existingProduct, productID);
      }
    }
  }
});

const findProduct = (cart, productID) => {
  return cart.find(product =>
    product.id === productID.id &&
    product.color === productID.color &&
    product.price === productID.price &&
    product.name === productID.name
  );
};

const incrementProduct = (state, existingProduct, productID) => {
  existingProduct.quantity++;
  existingProduct.totalPrice += productID.price;
  updateCartAndTotal(state, productID.price);
};

const addNewProduct = (state, cart, productID) => {
  cart.push({
    id: productID.id,
    name: productID.name,
    price: productID.price,
    color: productID.color,
    size: productID.size,
    totalPrice: productID.price,
    quantity: 1,
    img: productID.img,
    text: productID.text
  });
  updateCartAndTotal(state, productID.price);
};

const removeProduct = (state, cart, productID) => {
  state.cart = cart.filter(product =>
    product.id !== productID.id &&
    product.size !== productID.size &&
    product.color !== productID.color
  );
  updateCartAndTotal(state, -productID.price);
};

const decrementProduct = (state, existingProduct, productID) => {
  existingProduct.quantity--;
  existingProduct.totalPrice -= productID.price;
  updateCartAndTotal(state, -productID.price);
};

const updateCartAndTotal = (state, priceChange) => {
  state.totalQuantity += priceChange > 0 ? 1 : -1;
  state.totalPrice += priceChange;
};

export const { addtocart, removefromcart } = cartSlice.actions;
export default cartSlice.reducer;
