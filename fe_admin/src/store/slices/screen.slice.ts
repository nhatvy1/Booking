import { createSlice } from "@reduxjs/toolkit"

interface ScreenState {
  // sidebar: boolean
  fullScreen: boolean
}

const initialState: ScreenState = {
  // sidebar: false,
  fullScreen: false
}

const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    // showSidebar: (state)=> {
    //   state.sidebar = !state.sidebar
    // },
    handlefullScreen: (state)=> {
      state.fullScreen = !state.fullScreen
    }
  }
})

export const { handlefullScreen } = screenSlice.actions
const screenReducer = screenSlice.reducer
export default screenReducer