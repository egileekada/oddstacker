import { createSlice } from '@reduxjs/toolkit'

export const gameInput = createSlice({
  name: 'gameinput',
  initialState: {
    point: 0, 
    payload: [] as any, 
  },
  reducers: {
    pointCase: (state, action) => { 
      state.point = action.payload
    },  
    payloadCase: (state, action) => {  
        state.payload = action.payload 
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { pointCase, payloadCase} = gameInput.actions

export default gameInput.reducer