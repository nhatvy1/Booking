import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instanceAuth from '../../axios/axios.auth'

interface RoleSlice {
  loading: boolean
  listRoles: IRole[] | []
  roleCurrent: IRole
  editRoleModal: boolean
  openAddRoleModal: boolean
}

const initialState: RoleSlice = {
  editRoleModal: false,
  roleCurrent: { id: null, name: '', slug: '' },
  loading: false,
  listRoles: [],
  openAddRoleModal: false
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

export const createRole = createAsyncThunk(
  'role/createRole',
  async(payloadRole: IPayloadRole, { rejectWithValue })=> {
    try {
      const response = await instanceAuth.post('/role', payloadRole)
      console.log('Check response: ', response)
      return response
    } catch(e) {
      return rejectWithValue(e)
    }
  }
)

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    openAddRoleModal(state) {
      state.openAddRoleModal = true
    },
    closeAddRoleModal(state) {
      state.openAddRoleModal = false
    },
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
      .addCase(createRole.pending, (state)=> {
        state.loading = true
      })
      .addCase(createRole.fulfilled, (state, action: any)=> {
        state.loading = false
        console.log('Check action: ', action)
      })
      .addCase(createRole.rejected, (state)=> {
        state.loading = false
      })
  },
})

export const { selectRole, closeEditRoleModal, openAddRoleModal, closeAddRoleModal } = roleSlice.actions
const roleReducer = roleSlice.reducer
export default roleReducer
