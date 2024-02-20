import Box from '@mui/material/Box'
import CardRole from '../../../components/pagesComponent/ManageRole/CardRole'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { getAllRole, openAddRoleModal } from '../../../store/slices/role.slice'
import EditRole from '../../../components/pagesComponent/ManageRole/EditRole'
import Button from '@mui/material/Box'
import AddRole from '../../../components/pagesComponent/ManageRole/AddRole'
import { flexJustifyBetween } from '../../../theme/common.style'

const ManageRole = () => {
  const dispatch = useAppDispatch()
  const { listRoles } = useSelector((state: RootState) => state.role)

  useEffect(() => {
    dispatch(getAllRole())
  }, [])

  return (
    <>
      <Box sx={flexJustifyBetween}>
        <Typography variant='h4' component='h1' padding={2}>
          Quản lý phân quyền
        </Typography>
        <Button
          sx={{
            padding: '10px',
            border: '1px solid #ff385c',
            borderRadius: '5px',
            color: '#ff385c',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(openAddRoleModal())}
        >
          Thêm quyền
        </Button>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {listRoles.map((item: IRole) => (
          <CardRole item={item} key={item.id} />
        ))}
      </Box>

      <AddRole />

      <EditRole />
    </>
  )
}

export default ManageRole
