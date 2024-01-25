import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { getListUser } from '../../../store/slices/user.slice'
import TableCus from '../../../components/common/TableCus'

const ManageUser = () => {
  const dispatch = useAppDispatch()
  const { listUsers } = useSelector((state: RootState)=> state.user)
  
  useEffect(()=> {
    dispatch(getListUser())
  }, [])

  return (
    <Box>
      <Typography variant='h4' component='h1' padding={2}>Quản lý tài khoản</Typography>
      <TableCus listUsers={listUsers} />
    </Box>
  )
}

export default ManageUser
