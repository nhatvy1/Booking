import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instanceAuth from '../../axios/axios.auth'

interface RoleSlice {
  loading: boolean
  listRoles: IRole[] | []
  roleCurrent: IRole
  editRoleModal: boolean
}

const initialState: RoleSlice = {
  editRoleModal: false,
  roleCurrent: { id: null, name: '', slug: '' },
  loading: false,
  listRoles: [],
}

export const getAllRole = createAsyncThunk(
  'role/getAllRoles',
  async (_, { rejectWithValue }) => {
    try {
      const response: IResponseRole = await instanceAuth.get('/role')
      return response
    } catch (e) {
      return rejectWithValue(e)
    }
  },
)

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    selectRole(state, payload) {
      state.roleCurrent = payload.payload
      state.editRoleModal = true
    },
    closeEditRoleModal(state) {
      state.editRoleModal = false
      state.roleCurrent = { id: null, name: '', slug: '' }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllRole.pending, (state) => {
        state.loading = true
      })
      .addCase(
        getAllRole.fulfilled,
        (state, action: PayloadAction<IResponseRole>) => {
          return { ...state, listRoles: action.payload.result }
        },
      )
      .addCase(getAllRole.rejected, (state) => {
        return { ...state, listRoles: [], loading: false }
      })
  },
})

export const { selectRole, closeEditRoleModal } = roleSlice.actions
const roleReducer = roleSlice.reducer
export default roleReducer
