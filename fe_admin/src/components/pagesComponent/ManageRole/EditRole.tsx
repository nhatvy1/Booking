import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { closeEditRoleModal } from '../../../store/slices/role.slice'
import DataTable from '../../common/DataTable'
import { GridColDef } from '@mui/x-data-grid'
import { Checkbox } from '@mui/material'
import { pink } from '@mui/material/colors'
import ButtonCustom from '../../common/Button'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  overflow: 'auto',
  maxHeight: 700,
  background: 'white',
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  zIndex: 30,
}

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Chức năng',
    width: 300,
    align: 'left',
    renderCell(params) {
      return <Typography component='p'>Quản lí {params.id}</Typography>
    },
  },
  {
    field: 'create',
    headerName: 'Thêm',
    width: 100,
    renderCell(params) {
      return (
        <Checkbox
          defaultChecked={params.row.create}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      )
    },
  },
  {
    field: 'read',
    headerName: 'Xem',
    width: 100,
    renderCell(params) {
      return (
        <Checkbox
          defaultChecked={params.row.read}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      )
    },
  },
  {
    field: 'update',
    headerName: 'Sửa',
    width: 100,
    renderCell(params) {
      return (
        <Checkbox
          defaultChecked={params.row.update}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      )
    },
  },
  {
    field: 'delete',
    headerName: 'Xóa',
    width: 100,
    renderCell(params) {
      return (
        <Checkbox
          defaultChecked={params.row.delete}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      )
    },
  },
]

const rows = [
  { id: 'tài khoản', create: true, read: false, update: false, delete: true },
]

const EditRole = () => {
  const dispatch = useDispatch()
  const { editRoleModal } = useSelector((state: RootState) => state.role)
  const { roleCurrent } = useSelector((state: RootState) => state.role)

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={editRoleModal}
      onClose={() => dispatch(closeEditRoleModal())}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
      }}
    >
      <Fade in={editRoleModal}>
        <Box sx={style}>
          {/* Tiếu đề  */}
          <Box sx={{ marginBottom: '10px' }}>
            <Typography
              id='transition-modal-description'
              variant='h5'
              component='span'
            >
              {roleCurrent.slug}
            </Typography>
            <Typography variant='h5' component='span'>
              -
            </Typography>
            <Typography
              id='transition-modal-title'
              variant='h5'
              component='span'
            >
              {roleCurrent.name}
            </Typography>
          </Box>
          {/* Phân quyền theo chức năng */}
          <Box
            component='form'
          >
            <DataTable columns={columns} rows={rows} />
            <Box sx={{ width: '200px', margin: '10px auto 0' }}>
              <ButtonCustom text='Cập nhật' />
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default EditRole
