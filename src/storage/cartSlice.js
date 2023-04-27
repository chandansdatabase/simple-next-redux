import { createSlice } from '@reduxjs/toolkit'
import findIndex from 'lodash/findIndex'
const initialState = {
  cart: [],
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.cart.push({
        ...action.payload,
        quantity:1
      })
      setStorage(state.cart)
    },
    remove: (state, action) => {
        const index = findIndex(state.cart, ['id', action.payload])
        if(index >= 0){
          state.cart.splice(index, 1)
        }
        setStorage(state.cart)
    },
    quantityManage: (state, action) => {
      const index = findIndex(state.cart, ['id', action.payload.id])
      if(index >= 0){
        state.cart[index].quantity = action.payload.quantity
      }
      setStorage(state.cart)
    },
    setCart: (state, action) => {
      state.cart = action.payload
      setStorage(state.cart)
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, quantityManage, setCart } = cartSlice.actions

export const checkStorage = () => (dispatch) => {
  if(localStorage.getItem('cart')){
    try{
      dispatch(setCart(JSON.parse(atob(localStorage.getItem('cart')))))
    }
    catch(err){
      localStorage.clear('cart');
      setStorage([])
    }
  }
  else{
      setStorage([])
  }
}

const setStorage = (p) =>{
  localStorage.setItem("cart", btoa(JSON.stringify(p)))
}

export default cartSlice.reducer