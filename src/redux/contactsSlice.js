import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'contacts',
  initialState: {items: []},
  reducers:{
    add: (state, action) =>{
      state.items.push(action.payload)
    },
    delete: (state, action) =>{
      state.items.filter(item => item !== action.payload.id )
    }
  }
})


export default slice.reducer
export const {add, delete} = slice.actions