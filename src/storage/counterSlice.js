import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

function isRejectedAction(action) {
return action.type.endsWith('rejected')
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
      setStorage(state.value)
    },
    decrement: (state) => {
      state.value -= 1
      setStorage(state.value)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      setStorage(state.value)
    },
    setCount: (state, action) => {
      state.value = action.payload
      setStorage(state.value)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(increment, (state, action) => {
        setStorage(state.value)
        // action is inferred correctly here if using TS
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(decrement, (state, action) => {
        console.log(state)
        setStorage(state.value)
      })
      // You can match a range of action types
      .addMatcher(
        isRejectedAction,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {}
      )
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setCount } = counterSlice.actions


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
        setStorage(amount)
    }, 1000)
}

export const checkStorage = () => (dispatch) => {
    if(localStorage.getItem('count')){
        dispatch(setCount(Number(localStorage.getItem('count'))))
    }
    else{
        setStorage(0)
    }
}

const setStorage = (i) =>{
    localStorage.setItem("count", i)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value


export default counterSlice.reducer