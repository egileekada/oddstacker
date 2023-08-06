import { createSlice } from '@reduxjs/toolkit'

export const gameDetails = createSlice({
  name: 'gamedetails',
  initialState: {
    data: {
      game: {},
      open: false
    },
  },
  reducers: { 
    detailCase: (state, action) => { 
      state.data = action.payload
    },  
  },
})

// Action creators are generated for each case reducer function
export const { detailCase } = gameDetails.actions

export default gameDetails.reducer