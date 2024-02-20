import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import ButtonCustom from '../../common/Button'
import ModalCustom from '../../common/ModalCustome'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { closeAddRoleModal, createRole } from '../../../store/slices/role.slice'
import { useAppDispatch } from '../../../hooks/useAppDispatch'

const AddRole = () => {
  const { openAddRoleModal } = useSelector((state: RootState)=> state.role)
  const dispatch = useAppDispatch()

  const handleClose = ()=> [
    dispatch(closeAddRoleModal())
  ]

  const onSubmit: SubmitHandler<IPayloadRole> = (values)=> {
    dispatch(createRole(values))
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPayloadRole>()

  return (
    <ModalCustom open={openAddRoleModal} handleClose={handleClose}>
      <Typography variant='h5' component='p'>
        Thêm vai trò
      </Typography>
      <Box
        component='form'
        sx={{ width: '360px' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          margin='normal'
          fullWidth
          label='Mô tả'
          {...register('name', {
            required: {
              value: true,
              message: 'Vui lòng nhập trường này',
            },
          })}
          helperText={
            <Typography component='span' color='secondary' sx={{ padding: 0 }}>
              {errors?.name?.message}
            </Typography>
          }
        />
        <TextField
          margin='normal'
          fullWidth
          label='Vai trò người dùng'
          {...register('slug', {
            required: {
              value: true,
              message: 'Vui lòng nhập trường này',
            },
          })}
          helperText={
            <Typography component='span' color='secondary' sx={{ padding: 0 }}>
              {errors?.slug?.message}
            </Typography>
          }
        />
        <Box sx={{ marginTop: '10px' }}>
          <ButtonCustom text='Cập nhật' />
        </Box>
      </Box>
    </ModalCustom>
  )
}

export default AddRole
