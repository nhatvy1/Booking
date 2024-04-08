import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instanceAuth from '../../axios/axios.auth'
import { toast } from 'react-toastify'
import queryString from 'query-string';

interface UserSlice {
  loading: boolean
  listUsers: IUser[] | []
  editUserModal: boolean
  deleteUserModal: boolean
  currentUser: IUser
  totalResults: number
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
  totalResults: 0
}

export const createUser = createAsyncThunk(
  'user/createUser',
  async (body: IUser, { rejectWithValue }) => {
    try {
      const response: any = await instanceAuth.post(`/auth/register`, body)
      return response
    } catch (e) {
      console.log(e)
      return rejectWithValue(e)
    }
  },
)

export const getListUser = createAsyncThunk(
  'user/getListUser',
  async ({ page, limit }: { page: number; limit: number }, { rejectWithValue }) => {
    try {
      const search = {
        page, 
        limit, 
        search: ''
      }
      const filter = queryString.stringify(search)
      const response: IResponseListUser = await instanceAuth.get(`/user?${filter}`)
      return response
    } catch (e) {
      console.log(e)
      return rejectWithValue(e)
    }
  },
)

export const updateUserById = createAsyncThunk(
  'user/updateUserById',
  async ({ id, body }: { id: number | null; body: IUser }, { rejectWithValue }) => {
    try {
      const response: any = await instanceAuth.put(`/user/${id}`, body)
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
    addUser(state) {
      state.editUserModal = true
    },
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
    }
  },
  extraReducers(builder) {
    builder
      // create user
      .addCase(createUser.pending, (state) => {
        state.loading = true
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<any>) => {
        const user: IUser = action.payload.result
        closeEditUserModal()
        toast.success('Thêm mới thành công')
        return {
          ...state,
          listUsers: [user, ...state.listUsers],
          editUserModal: false,
          currentUser: { id: null, email: '', fullName: '', status: null, createdAt: null },
        }
      })
      .addCase(createUser.rejected, (state) => {
        return { ...state, listUsers: [], loading: false }
      })

      // get all user
      .addCase(getListUser.pending, (state) => {
        state.loading = true
      })
      .addCase(getListUser.fulfilled, (state, action: PayloadAction<IResponseListUser>) => {
        return {
          ...state,
          listUsers: action.payload.result.result,
          totalResults: action.payload.result.totalResults,
        }
      })
      .addCase(getListUser.rejected, (state) => {
        return { ...state, listUsers: [], loading: false }
      })

      // update
      .addCase(updateUserById.pending, (state) => {
        state.loading = true
      })
      .addCase(updateUserById.fulfilled, (state, action: PayloadAction<any>) => {
        toast.success(action?.payload?.message || 'Cập nhật thành công')
        return {
          ...state,
          editUserModal: false,
          currentUser: { id: null, email: '', fullName: '', status: null, createdAt: null },
          listUsers: state.listUsers.map((user) => {
            if (user.id === action.payload.result.id) {
              user = action.payload.result
            }
            return user
          }),
        }
      })
      .addCase(updateUserById.rejected, (state) => {
        return { ...state, loading: false }
      })

      // delete
      .addCase(deleteUserById.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteUserById.fulfilled, (state, action: PayloadAction<any>) => {
        toast.success(action?.payload?.message || 'Xóa thành công')
        return {
          ...state,
          deleteUserModal: false,
          listUsers: state.listUsers.filter((user) => user.id !== action.payload.result.id),
        }
      })
      .addCase(deleteUserById.rejected, (state) => {
        return { ...state, loading: false }
      })
  },
})

export const {
  addUser,
  selectEditUser,
  closeEditUserModal,
  openDeleteUserById,
  closeDeleteUserById,
} = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer
