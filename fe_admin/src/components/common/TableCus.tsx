import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import moment from 'moment'
import Tag from './Tag'
import Box from '@mui/material/Box'
import Tooltip from  '@mui/material/Tooltip'
import { CiEdit } from 'react-icons/ci'
import { MdOutlineDelete } from 'react-icons/md'
import { flexCenter } from '../../theme/common.style'
import Button from '@mui/material/Button'

const TableCus = ({ listUsers }: any) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead sx={{ background: '#EEEEEE	' }}>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell>Họ và tên</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Ngày khởi tạo</TableCell>
            <TableCell>Trạng thái</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listUsers.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell component='th' scope='row'>
                {user.id}
              </TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {moment(user.createdAt).format('DD-MM-YYYY')}
              </TableCell>
              <TableCell>
                <Tag />
              </TableCell>
              <TableCell>
                <Box sx={flexCenter}>
                  <Tooltip title="Cập nhật" placement="top">
                    <Button 
                      size='large'
                    >
                      <CiEdit size={24} />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Xóa" placement="top">
                    <Button>
                      <MdOutlineDelete size={24} color='pink' />
                    </Button>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCus
