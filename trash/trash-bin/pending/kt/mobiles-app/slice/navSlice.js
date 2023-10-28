import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null

}

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      set.origin = action.playload;
    },
    setDestination: (state, action) => {
      set.destination = action.playload;
    },
    setTravelTimeInformation: (state, action) => {
      set.travelTimeInformation = action.playload;
    }
  }

})




export const {
  setOrigin,
  setDestination,
  setTravelTimeInformation
} = navSlice.actions;




//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;


export default navSlice.Reducer;
                                                                      