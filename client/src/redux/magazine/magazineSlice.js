import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const getmagazine = createAsyncThunk("magazine/get" , async() => {try {
    let result = await axios.get("http://localhost:5000/magazine/");
    return result;
}  
catch (error) {
    console.log(error);
}});
export const addmagazine = createAsyncThunk("magazine/add" , async(magazine) => {try {
  let result = axios.post("http://localhost:5000/magazine/add", magazine);
  return result;
} 
catch (error) {
  console.log(error);
}});
export const deletemagazine = createAsyncThunk("magazine/delete" , async(id) => {try {
  let result = axios.delete( `http://localhost:5000/magazine/${id}`);
  return result;
} 
catch (error) {
  console.log(error);
}});

export const editmagazine = createAsyncThunk("magazine/edit" , async({id,edited}) => {try {
  let result = axios.put( `http://localhost:5000/magazine/${id}` , edited);
  return result;
} 
catch (error) {
  console.log(error);
}});
const initialState = {
  magazineliste: null,
  status:null,
}

export const magazineslice = createSlice({
  name: 'magazine',
  initialState,
  reducers: {},
  extraReducers:{
    [getmagazine.fulfilled]:(state, action) => {
        state.status= "success";
        state.magazineliste = action.payload?.data?.magazine;
    },
    [getmagazine.pending]:(state, action) => {
        state.status= "pending";
        
    },
    [getmagazine.rejected]:(state, action) => {
        state.status= "rejected";
        
    },
    [addmagazine.fulfilled]:(state, action) => {
      state.status= "success";
  },
  [addmagazine.pending]:(state, action) => {
      state.status= "pending";
      
  },
  [addmagazine.rejected]:(state, action) => {
      state.status= "rejected";
      
  },
  [deletemagazine.fulfilled]:(state, action) => {
    state.status= "success";
},
[deletemagazine.pending]:(state, action) => {
    state.status= "pending";
    
},
[deletemagazine.rejected]:(state, action) => {
    state.status= "rejected";
    
},
  
},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount} = magazineslice.actions

export default magazineslice.reducer