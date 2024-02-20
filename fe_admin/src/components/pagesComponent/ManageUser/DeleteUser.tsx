import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ModalCustom from '../../common/ModalCustome'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import {
  closeDeleteUserById,
  deleteUserById,
  getListUser,
} from '../../../store/slices/user.slice'

const DeleteUser = () => {
  const { deleteUserModal, currentUser } = useSelector(
    (state: RootState) => state.user,
  )
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(closeDeleteUserById())
  }

  const deleteUser = async() => {
    const result = await dispatch(deleteUserById(currentUser.id))
    if(result.payload.message === 'success') {
      dispatch(getListUser())
    }
  }

  return (
    <ModalCustom handleClose={handleClose} open={deleteUserModal}>
      <Box>
        <Typography component='p' variant='h6'>
          Bạn có chắc chắn muốn xóa không ?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button
            sx={{
              border: '1px solid lightblue',
              padding: '5px',
              marginRight: '10px',
            }}
          >
            Từ chối
          </Button>
          <Button
            sx={{ border: '1px solid red', color: 'red', padding: '5px' }}
            onClick={deleteUser}
          >
            Đồng ý
          </Button>
        </Box>
      </Box>
    </ModalCustom>
  )
}

export default DeleteUser
