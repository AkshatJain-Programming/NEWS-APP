import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "India",
}

export const QuerySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    
    changeQuery: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeQuery } = QuerySlice.actions

export default QuerySlice.reducer