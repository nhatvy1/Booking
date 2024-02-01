import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instanceAuth from '../../axios/axios.auth'

interface UserSlice {
  loading: boolean
  listUsers: IUser[] | []
}

const initialState: UserSlice = {
  loading: false,
  listUsers: [],
}

export const getListUser = createAsyncThunk(
  'user/getListUser',
  async (_, { rejectWithValue }) => {
    try {
      const response: IResponseListUser = await instanceAuth.get('/user')
      return response
    } catch (e) {
      console.log(e)
      return rejectWithValue(e)
    }
  },
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getListUser.pending, (state) => {
        state.loading = true
      })
      .addCase(getListUser.fulfilled, (state, action: PayloadAction<IResponseListUser>) => {
        return { ...state, listUsers: action.payload.result }
      })
      .addCase(getListUser.rejected, (state) => {
        return { ...state, listUsers: [], loading: false }
      })
  },
})

const userReducer = userSlice.reducer
export default userReducer
