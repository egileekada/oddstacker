import { createSlice } from '@reduxjs/toolkit'

export const pageInfo: any = createSlice({
  name: 'pageinfo',
  initialState: {
    page: "1",
    size: "10",
    total: "0",
    tnx: "",
  },
  reducers: {
    pageCase: (state, action) => { 
      state.page = action.payload
    }, 
    sizeCase: (state, action) => {  
        state.size = action.payload 
    }, 
    totalCase: (state, action) => {  
        state.total = action.payload 
    },
    tnxCase: (state, action) => {  
        state.tnx = action.payload 
    },
  },
})

// Action creators are generated for each case reducer function
export const { pageCase, sizeCase, totalCase, tnxCase} = pageInfo.actions

export default pageInfo.reducer