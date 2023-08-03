import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const getavis = createAsyncThunk("avis/get" , async() => {try {
    let result = await axios.get("http://localhost:5000/avis/");
    return result;
}  
catch (error) {
    console.log(error);
}});
export const addavis = createAsyncThunk("avis/add" , async(avis) => {try {
  let result = axios.post("http://localhost:5000/avis/add", avis);
  return result;
} 
catch (error) {
  console.log(error);
}});
export const deleteavis = createAsyncThunk("avis/delete" , async(id) => {try {
  let result = axios.delete( `http://localhost:5000/avis/${id}`);
  return result;
} 
catch (error) {
  console.log(error);
}});

export const editavis = createAsyncThunk("avis/edit" , async({id,edited}) => {try {
  let result = axios.put( `http://localhost:5000/avis/${id}` , edited);
  return result;
} 
catch (error) {
  console.log(error);
}});
const initialState = {
  avisliste: null,
  status:null,
}

export const avisslice = createSlice({
  name: 'avis',
  initialState,
  reducers: {},
  extraReducers:{
    [getavis.fulfilled]:(state, action) => {
        state.status= "success";
        state.avisliste = action.payload?.data?.avis;
    },
    [getavis.pending]:(state, action) => {
        state.status= "pending";
        
    },
    [getavis.rejected]:(state, action) => {
        state.status= "rejected";
        
    },
    [addavis.fulfilled]:(state, action) => {
      state.status= "success";
  },
  [addavis.pending]:(state, action) => {
      state.status= "pending";
      
  },
  [addavis.rejected]:(state, action) => {
      state.status= "rejected";
      
  },
  [deleteavis.fulfilled]:(state, action) => {
    state.status= "success";
},
[deleteavis.pending]:(state, action) => {
    state.status= "pending";
    
},
[deleteavis.rejected]:(state, action) => {
    state.status= "rejected";
    
},
  
},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount} = avisslice.actions

export default avisslice.reducer