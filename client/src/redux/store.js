import { configureStore } from '@reduxjs/toolkit'
import  magazineslice  from './magazine/magazineSlice'
import doctorslice  from './doctor/doctorSlice'

export const store = configureStore({
  reducer: {
    magazine: magazineslice,
    doctor: doctorslice,
  },
})