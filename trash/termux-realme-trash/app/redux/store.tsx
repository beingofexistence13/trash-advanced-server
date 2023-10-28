// Imports
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import themeReducer from './themeSlice'



// Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
})





// Exports
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
