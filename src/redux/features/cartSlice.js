import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';
import { addToCartApi } from 'services/product.serice';
import { AuthUser, strRandom } from 'utils';
const initialCount = JSON.parse(localStorage.getItem('cart_list'))
const initialState = {
  value: initialCount ? initialCount.length : 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      if (localStorage.getItem('cart_list') === undefined || localStorage.getItem('cart_list') === null) {
        localStorage.setItem('cart_list', JSON.stringify([]));
      }
      if (localStorage.getItem('cart_list') !== undefined || localStorage.getItem('cart_list') !== null) {
        let currentCart = JSON.parse(localStorage.getItem('cart_list'));
        localStorage.setItem('cart_list', JSON.stringify([...currentCart, action.payload]));
        addToCartApi({
          product_id: action.payload.id,
          customer_id: AuthUser()?.id,
          guest_token: localStorage.getItem('guest_token'),
          quantity: currentCart.length
        }).then((response) => {
          if (response.data.error === 0) {
            toast.success(response.data.message);
          } else {
            toast.error('Network Error')
          }
        })
      }
      state.value += 1
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
      state.value = currentCart.length > 1 ? currentCart.length - 1 : currentCart.length
    },
  },
})

export const { setCart, removeCart } = cartSlice.actions

export default cartSlice.reducer