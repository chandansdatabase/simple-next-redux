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
    },
    remove: (state, action) => {
        const index = findIndex(state.cart, ['id', action.payload])
        if(index >= 0){
          state.cart.splice(index, 1)
        }
    },
    quantityManage: (state, action) => {
      const index = findIndex(state.cart, ['id', action.payload.id])
      if(index >= 0){
        state.cart[index].quantity = action.payload.quantity
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, quantityManage } = cartSlice.actions


export default cartSlice.reducer