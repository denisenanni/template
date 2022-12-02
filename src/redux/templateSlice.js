import { createSlice } from '@reduxjs/toolkit'


export const templateSlice = createSlice({
  name: 'template',
  initialState: {
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default templateSlice.reducer