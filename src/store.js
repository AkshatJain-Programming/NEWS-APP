import { configureStore } from '@reduxjs/toolkit'
import  QueryReducer  from './query/QuerySlice'
import darkReducer from './dark/darkSlice'

export const store = configureStore({
  reducer: {
    query: QueryReducer,
    dark: darkReducer
  },
})