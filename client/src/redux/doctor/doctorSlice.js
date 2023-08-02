import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const getdoctor = createAsyncThunk("doctor/get" , async() => {try {
    let result = await axios.get("http://localhost:5000/doctor/");
    return result;
}  
catch (error) {
    console.log(error);
}});
export const adddoctor = createAsyncThunk("doctor/add" , async(doctor) => {try {
  let result = axios.post("http://localhost:5000/doctor/add", doctor);
  return result;
} 
catch (error) {
  console.log(error);
}});
export const deletedoctor = createAsyncThunk("doctor/delete" , async(id) => {try {
  let result = axios.delete( `http://localhost:5000/doctor/${id}`);
  return result;
} 
catch (error) {
  console.log(error);
}});

export const editdoctor = createAsyncThunk("doctor/edit" , async({id,edited}) => {try {
  let result = axios.put( `http://localhost:5000/doctor/${id}` , edited);
  return result;
} 
catch (error) {
  console.log(error);
}});
const initialState = {
  doctorliste: null,
  status:null,
}

export const doctorslice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},
  extraReducers:{
    [getdoctor.fulfilled]:(state, action) => {
        state.status= "success";
        state.doctorliste = action.payload?.data?.doctor;
    },
    [getdoctor.pending]:(state, action) => {
        state.status= "pending";
        
    },
    [getdoctor.rejected]:(state, action) => {
        state.status= "rejected";
        
    },
    [adddoctor.fulfilled]:(state, action) => {
      state.status= "success";
  },
  [adddoctor.pending]:(state, action) => {
      state.status= "pending";
      
  },
  [adddoctor.rejected]:(state, action) => {
      state.status= "rejected";
      
  },
  [deletedoctor.fulfilled]:(state, action) => {
    state.status= "success";
},
[deletedoctor.pending]:(state, action) => {
    state.status= "pending";
    
},
[deletedoctor.rejected]:(state, action) => {
    state.status= "rejected";
    
},
  
},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount} = doctorslice.actions

export default doctorslice.reducer