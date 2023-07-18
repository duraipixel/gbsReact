import { createSlice } from '@reduxjs/toolkit'
// import { toast } from 'react-hot-toast';
// import { addToCartApi } from 'services/product.service';
// import { AuthUser } from 'utils';

const cartList = JSON.parse(localStorage.getItem('cart_list'))
const initialState = {
  value: cartList ? cartList.length : 0,
  data: cartList ? cartList : [],
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartList: (state, action) => {
      localStorage.setItem('cart_list', JSON.stringify(action.payload.data));
      let currentCart = JSON.parse(localStorage.getItem('cart_list'));
      return {
        value: action.payload.value,
        data: currentCart,
      }
    },
    setCartCount: (state, action) => {
      return state = {
        value: action.payload,
        data: cartList ? cartList : [],
      }
    },
    setCart: (state, action) => {
      if (localStorage.getItem('cart_list') === undefined || localStorage.getItem('cart_list') === null) {
        localStorage.setItem('cart_list', JSON.stringify([]));
      }
      if (localStorage.getItem('cart_list') !== undefined || localStorage.getItem('cart_list') !== null) {
        let currentCart = JSON.parse(localStorage.getItem('cart_list'));
        localStorage.setItem('cart_list', JSON.stringify([...currentCart, action.payload]));
      }
      var counter = state.value + 1
      return state = {
        value: counter,
        data: cartList ? cartList : [],
      }
    },
    removeCart: (state, action) => {
      let currentCart = JSON.parse(localStorage.getItem('cart_list'));
      function isExists(product) {
        return product.id === action.payload.id;
      }
      var Result = currentCart.find(isExists)
      var index = currentCart.indexOf(Result)
      currentCart.splice(index, 1)
      localStorage.setItem('cart_list', JSON.stringify(currentCart));

      return state = {
        value: currentCart.length > 1 ? currentCart.length - 1 : currentCart.length,
        data: currentCart,
      }
    },
    clearCart: (state, action) => {
      return state = {
        value: 0,
        data: []
      }
    },
  },
})

export const { setCart, removeCart, setCartList, clearCart,setCartCount } = cartSlice.actions

export default cartSlice.reducer