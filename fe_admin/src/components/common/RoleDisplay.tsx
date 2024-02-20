import Chip from '@mui/material/Chip'

interface Props {
  status: string
}


const RoleDisplay = ({ status }: Props) => {
  return (
    <Chip
      label={<span>Người dùng</span>}
    />
  )
}

export default RoleDisplay
