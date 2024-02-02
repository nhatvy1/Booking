import Fade from '@mui/material/Fade'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { ReactNode } from 'react'

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

interface Props {
  children: ReactNode
  open: boolean
  handleClose: ()=> void
}

const ModalCustom = ({ children, open, handleClose }: Props) => {
  return <Modal
  aria-labelledby='transition-modal-title'
  aria-describedby='transition-modal-description'
  open={open}
  onClose={handleClose}
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
    <Fade in={open}>
      <Box sx={style}>
        {children}
      </Box>
    </Fade>
  </Modal>
}

export default ModalCustom
