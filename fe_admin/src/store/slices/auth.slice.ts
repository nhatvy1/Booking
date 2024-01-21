import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  isLoggedIn: false,
  msg: '',
  token: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout() {
      console.log('log out')
    },
  },
})

export const { logout } = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer