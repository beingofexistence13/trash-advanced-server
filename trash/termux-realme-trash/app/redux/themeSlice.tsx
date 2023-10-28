// Imports
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Typescript not needed for now 😂😂😂
export interface ThemeState {
  theme: number
}

const initialState = {
  border:"#F4F4F4",
  primary:"#F5F5F5",
  
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    dark: (state,action) => {
      state.primary = "#070035"
    },
    light: (state,action) => {
      state.primary = "#F5F5F5"
    },
  },
 
  
})

// Action creators are generated for each case reducer function
export const { dark,light } = themeSlice.actions;
export default themeSlice.reducer;

