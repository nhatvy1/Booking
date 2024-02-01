import Box from '@mui/material/Box'
import CardRole from '../../../components/pagesComponent/ManageRole/CardRole'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { getAllRole } from '../../../store/slices/role.slice'
import EditRole from '../../../components/pagesComponent/ManageRole/EditRole'

const ManageRole = () => {
  const dispatch = useAppDispatch()
  const { listRoles } = useSelector((state: RootState) => state.role)

  useEffect(() => {
    dispatch(getAllRole())
  }, [])

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {listRoles.map((item: IRole) => (
          <CardRole item={item} key={item.id} />
        ))}
      </Box>

      <EditRole />
    </>
  )
}

export default ManageRole
