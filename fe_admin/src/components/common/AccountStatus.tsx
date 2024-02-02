import { Typography } from '@mui/material'
import Chip from '@mui/material/Chip'
import { MdOutlineDone, MdOutlinePending } from 'react-icons/md'
import { flexCenter } from '../../theme/common.style'
import { IoCloseOutline } from 'react-icons/io5'

interface Props {
  status: number
}

const Approved = () => {
  return (
    <Typography component='p' sx={flexCenter}>
      Đã duyệt <MdOutlineDone size={20} style={{ marginLeft: '4px' }} />
    </Typography>
  )
}

const Rejected = () => {
  return (
    <Typography component='p' sx={flexCenter}>
      Từ chối <IoCloseOutline size={20} style={{ marginLeft: '4px' }} />
    </Typography>
  )
}

const Pending = () => {
  return (
    <Typography component='p' sx={flexCenter}>
      Chờ duyệt <MdOutlinePending size={20} style={{ marginLeft: '4px' }} />
    </Typography>
  )
}

const AccountStatus = ({ status }: Props) => {
  return (
    <Chip
      label={
        status === 0 ? (
          <Approved />
        ) : status === 1 ? (
          <Pending />
        ) : status === -1 ? (
          <Rejected />
        ) : (
          'Ko xác định'
        )
      }
      sx={{
        border: `1px solid ${
          status === 0
            ? '#00CCFF'
            : status === 1
            ? '#FFCC00'
            : status === -1
            ? 'red'
            : '#00FF00'
        }`,
        background: 'transparent',
      }}
    />
  )
}

export default AccountStatus
