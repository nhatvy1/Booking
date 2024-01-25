import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { flexCenter } from '../../theme/common.style'

const Tag = () => {
  const p = <Typography sx={flexCenter}>Đã duyệt <IoCheckmarkDoneCircleOutline size={24} /></Typography>

  return (
    <Chip  color="primary" variant="outlined" label={p}/>
  )
}

export default Tag
