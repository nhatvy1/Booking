import Box from '@mui/material/Box'
import CardRole from '../../../components/pagesComponent/ManageRole/CardRole'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { getAllRole } from '../../../store/slices/role.slice'
import { Button, Modal } from '@mui/material'


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ManageRole = () => {
  const dispatch = useAppDispatch()
  const { listRoles } = useSelector((state: RootState) => state.role)

  const [openModal, setOpenModal] = useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  useEffect(() => {
    dispatch(getAllRole())
  }, [])

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {listRoles.map((item: any) => (
          <CardRole item={item} key={item.id} />
        ))}
      </Box>
      <Button onClick={handleOpen}>Bat</Button>

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <h1>sdsada</h1>
        </Box>
      </Modal>
    </>
  )
}

export default ManageRole
