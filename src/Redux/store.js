import { configureStore } from '@reduxjs/toolkit'
import poissonSlice from '../Slices/poissonSlice'

export const store = configureStore({
  reducer: {
     poisson:poissonSlice ,
  },
})