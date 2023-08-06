import { createSlice } from '@reduxjs/toolkit'

export const userInfo = createSlice({
  name: 'userinfo',
  initialState: {
    userdata: {},
  },
  reducers: {
    userCase: (state, action) => { 
      state.userdata = action.payload
    },  
  },
})

// Action creators are generated for each case reducer function
export const { userCase } = userInfo.actions

export default userInfo.reducer