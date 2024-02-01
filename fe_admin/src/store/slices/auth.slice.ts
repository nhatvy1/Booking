import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import instanceNonAuth from '../../axios/axios.non.auth'

interface AuthSliceState {
  isLoggedIn: boolean
  token: string | null
  loginStatus: string
}

const initialState: AuthSliceState = {
  isLoggedIn: false,
  token: null,
  loginStatus: '',
}

export const login = createAsyncThunk(
  'auth/login',
  async (login: ILogin, { rejectWithValue }) => {
    try {
      const response = await instanceNonAuth.post('/auth/login', login)
      return response
    } catch (e) {
      return rejectWithValue(e)
    }
  },
)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state): AuthSliceState {
      return { ...state, token: null, isLoggedIn: false, loginStatus: '' }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        return { ...state, loginStatus: 'pending' }
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        toast.success(action?.payload?.message || 'Đăng nhập thành công')
        return {
          ...state,
          loginStatus: 'success',
          token: action?.payload?.result?.access_token,
          isLoggedIn: true,
        }
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        toast.error(action?.payload?.message || 'Vui lòng thử lại sau')
        return { ...state, loginStatus: 'rejected', isLoggedIn: false }
      })
  },
})

export const { logout } = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer
