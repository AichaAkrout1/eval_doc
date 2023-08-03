import { configureStore } from '@reduxjs/toolkit'
import  magazineslice  from './magazine/magazineSlice'
import doctorslice  from './doctor/doctorSlice'
import  avisslice  from './avis/avisSlice'
import userSlice from './user/userSlice'

export const store = configureStore({
  reducer: {
    magazine: magazineslice,
    doctor: doctorslice,
    avis: avisslice,
    user: userSlice,
  },
})