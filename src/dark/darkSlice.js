import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dark: false,
}

export const darkSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    
    changeMode: (state) => {
      state.dark = !state.dark
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeMode } = darkSlice.actions

export default darkSlice.reducer