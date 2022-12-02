import { configureStore } from '@reduxjs/toolkit'
import templateReducer from './templateSlice'


export default configureStore({
  reducer: {
    template: templateReducer

  }
})