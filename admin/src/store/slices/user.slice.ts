import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instanceAuth from '../../axios/axios.auth'
import { toast } from 'react-toastify'

interface UserSlice {
  loading: boolean
  listUsers: IUser[] | []
  editUserModal: boolean
  deleteUserModal: boolean
  currentUser: IUser
}

const initialState: UserSlice = {
  loading: false,
  listUsers: [],
  editUserModal: false,
  deleteUserModal: false,
  currentUser: {
    id: null,
    email: '',
    fullName: '',
    status: null,
    createdAt: null,
  },
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

export const deleteUserById = createAsyncThunk(
  'user/deleteUserById',
  async (id: number | null, { rejectWithValue }) => {
    try {
      const response: any = await instanceAuth.delete(`/user/${id}`)
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
  reducers: {
    selectEditUser(state, payload) {
      state.editUserModal = true
      state.currentUser = payload.payload
    },
    closeEditUserModal(state) {
      state.editUserModal = false
      state.currentUser = {
        id: null,
        email: '',
        fullName: '',
        status: null,
        createdAt: null,
      }
    },
    openDeleteUserById(state, payload) {
      state.deleteUserModal = true
      state.currentUser = payload.payload
    },
    closeDeleteUserById(state) {
      state.deleteUserModal = false
      state.currentUser = {
        id: null,
        email: '',
        fullName: '',
        status: null,
        createdAt: null,
      }
    },
  },
  extraReducers(builder) {
    builder
      // get all user
      .addCase(getListUser.pending, (state) => {
        state.loading = true
      })
      .addCase(
        getListUser.fulfilled,
        (state, action: PayloadAction<IResponseListUser>) => {
          return { ...state, listUsers: action.payload.result }
        },
      )
      .addCase(getListUser.rejected, (state) => {
        return { ...state, listUsers: [], loading: false }
      })

      // delete
      .addCase(deleteUserById.pending, (state) => {
        state.loading = true
      })
      .addCase(
        deleteUserById.fulfilled,
        (state, action: PayloadAction<any>) => {
          toast.success(action?.payload?.message || 'Xóa thành công')
          return {
            ...state,
            deleteUserModal: false,
            listUsers: state.listUsers.filter(
              (user) => user.id !== action.payload.result.id,
            ),
          }
        },
      )
      .addCase(deleteUserById.rejected, (state) => {
        return { ...state, loading: false }
      })
  },
})

export const {
  selectEditUser,
  closeEditUserModal,
  openDeleteUserById,
  closeDeleteUserById,
} = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
