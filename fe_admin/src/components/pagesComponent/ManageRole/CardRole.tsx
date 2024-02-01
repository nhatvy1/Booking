import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import { flexBetweenCenter } from '../../../theme/common.style'
import { CiEdit } from 'react-icons/ci'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { selectRole } from '../../../store/slices/role.slice'

const stylesCardRole = {
  width: '300px',
  marginRight: '20px',
  height: '100px',
  padding: '10px',
}

interface Props {
  item: IRole
}

const CardRole = ({ item }: Props) => {
  const dispatch = useDispatch()

  return (
    <Card 
      variant='outlined' 
      sx={{ ...stylesCardRole, ...flexBetweenCenter }} 
      onClick={()=> dispatch(selectRole(item))}
    >
      <Box>
        <Typography variant='h5'>{item.slug}</Typography>
        <Typography component='p'>{item.name}</Typography>
      </Box>
      <Box>
        <Tooltip title='Cập nhật'>
          <Button>
            <CiEdit size={24} />
          </Button>
        </Tooltip>
        <Tooltip title='Xóa'>
          <Button>
            <MdOutlineDeleteOutline size={24} />
          </Button>
        </Tooltip>
      </Box>
    </Card>
  )
}

export default CardRole
