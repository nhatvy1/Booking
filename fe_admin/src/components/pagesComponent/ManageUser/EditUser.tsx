import ModalCustom from '../../common/ModalCustome'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { closeEditUserModal } from '../../../store/slices/user.slice'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import ButtonCustom from '../../common/Button'

const EditUser = () => {
  const dispatch = useDispatch()
  const { editUserModal } = useSelector((state: RootState) => state.user)

  const handleClose = () => {
    dispatch(closeEditUserModal())
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>()

  const onSubmit: SubmitHandler<IUser> = (values) => {
    console.log('Check values: ', values)
  }

  return (
    <ModalCustom open={editUserModal} handleClose={handleClose}>
      <Typography variant='h5' component='p'>
        Cập nhật người dùng
      </Typography>
      <Box
        component='form'
        sx={{ width: '360px' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          margin='normal'
          required
          fullWidth
          label='Email'
          disabled
        />
        <TextField
          margin='normal'
          required
          fullWidth
          label='Họ và tên'
          {...register('fullName', {
            required: {
              value: true,
              message: 'Vui lòng nhập trường này',
            },
          })}
          helperText={
            <Typography component='span' color='secondary' sx={{ padding: 0 }}>
              {errors.fullName?.message}
            </Typography>
          }
        />
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Trạng thái</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Trạng thái'
            {...register('status', {
              required: {
                value: true,
                message: 'Vui lòng nhập trường này',
              },
            })}
          >
            <MenuItem value={-1}>Khóa tài khoản</MenuItem>
            <MenuItem value={0}>Phê duyệt</MenuItem>
            <MenuItem value={1}>Chờ duyệt</MenuItem>
          </Select>
          <FormHelperText>
            <Typography component='span' color='secondary' sx={{ padding: 0 }}>
              {errors.status?.message}
            </Typography>
          </FormHelperText>
        </FormControl>
        <Box sx={{ marginTop: '10px' }}>
          <ButtonCustom text='Cập nhật' />
        </Box>
      </Box>
    </ModalCustom>
  )
}

export default EditUser
