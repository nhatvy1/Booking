import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instanceAuth from "../../axios/axios.auth"

interface RoleSlice {
  loading: boolean
  listRoles: any
}

const initialState: RoleSlice = {
  loading: false,
  listRoles: []
}

export const getAllRole = createAsyncThunk(
  'role/getAllRoles',
  async(_, { rejectWithValue }) => {
    try {
      const response = await instanceAuth.get('/role')
      return response
    } catch(e) {
      return rejectWithValue(e)
    }
  }
)

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllRole.pending, (state)=> {
        state.loading = true
      })
      .addCase(getAllRole.fulfilled, (state, action: PayloadAction<any>)=> {
        return { ...state, listRoles: action.payload.result }
      })
      .addCase(getAllRole.rejected, (state)=> {
        return { ...state, listRoles: [], loading: false }
      })
  }
})

const roleReducer = roleSlice.reducer
export default roleReducer