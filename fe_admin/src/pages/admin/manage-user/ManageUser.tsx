import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { openDeleteUserById, getListUser, selectEditUser } from '../../../store/slices/user.slice'
import DataTable from '../../../components/common/DataTable'
import { GridColDef } from '@mui/x-data-grid'
import { flexCenter, flexJustifyBetween } from '../../../theme/common.style'
import { CiEdit } from 'react-icons/ci'
import { MdOutlineDelete } from 'react-icons/md'
import AccountStatus from '../../../components/common/AccountStatus'
import EditUser from '../../../components/pagesComponent/ManageUser/EditUser'
import RoleDisplay from '../../../components/common/RoleDisplay'
import DeleteUser from '../../../components/pagesComponent/ManageUser/DeleteUser'

const ManageUser = () => {
  const dispatch = useAppDispatch()
  const { listUsers } = useSelector((state: RootState) => state.user)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'fullName', headerName: 'Họ và tên', width: 250 },
    {
      field: 'role',
      headerName: 'Vai trò',
      width: 250,
      renderCell() {
        return <RoleDisplay status='12' />
      },
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      width: 250,
      renderCell(params) {
        return <AccountStatus status={params.row.status} />
      },
    },
    { field: 'createdAt', headerName: 'Ngày tạo', width: 250 },
    {
      field: 'action',
      headerName: 'Thao tác',
      width: 250,
      sortable: false,
      renderCell(params) {
        return (
          <Box sx={flexCenter}>
            <Tooltip title='Cập nhật' placement='top'>
              <Button
                size='large'
                onClick={() => dispatch(selectEditUser(params.row))}
              >
                <CiEdit size={24} />
              </Button>
            </Tooltip>
            <Tooltip title='Xóa' placement='top'>
              <Button
                onClick={()=> dispatch(openDeleteUserById(params.row))}
              >
                <MdOutlineDelete size={24} color='pink' />
              </Button>
            </Tooltip>
          </Box>
        )
      },
    },
  ]

  useEffect(() => {
    dispatch(getListUser())
  }, [])

  return (
    <Box>
      <Box sx={flexJustifyBetween}>
        <Typography variant='h4' component='h1' padding={2}>
          Quản lý tài khoản
        </Typography>
        <Button
          sx={{
            padding: '10px',
            border: '1px solid #ff385c',
            borderRadius: '5px',
            color: '#ff385c',
            cursor: 'pointer',
          }}
        >
          Thêm tài khoản
        </Button>
      </Box>

      <DataTable columns={columns} rows={listUsers} />
      
      <EditUser />

      <DeleteUser />
    </Box>
  )
}

export default ManageUser
