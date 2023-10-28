// Imports
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState = {
  passive_icon:"#353535",
  passive_text:"#353535",
  active_icon:"#000000",
  active_text:"#000000",
  
}

export const bottombarSlice = createSlice({
  name: 'bottombar',
  initialState,
  reducers: {
    darkBottombarStuff: (state,action) => {
      state.passive_icon:"#6c757d",
      state.passive_text:"#6c757d",
      state.active_icon:"#fff",
      state.active_text:"#fff",
    },
    lightBottombarStuff: (state,action) => {
      state.passive_icon:"#6c757d",
      state.passive_text:"#6c757d",
      state.active_icon:"#000000",
      state.active_text:"#000000",
    },
  },
 
  
})

// Action creators are generated for each case reducer function
export const { darkBottombarStuff,lightBottombarStuff } = bottombarSlice.actions;
export default bottombarSlice.reducer;

