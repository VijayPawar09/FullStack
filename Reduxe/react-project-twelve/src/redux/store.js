import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'
import { Provider } from 'react-redux'


export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
}) 
//Steps:
// create store 
// wrap app component under Provider
// create slice 
// register reducer in store 