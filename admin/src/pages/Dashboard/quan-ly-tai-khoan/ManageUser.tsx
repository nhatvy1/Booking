import {
  Pagination,
  Space,
  Table,
  Tooltip,
} from 'antd'
import type { TableProps } from 'antd'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useEffect } from 'react'
import { getListUser, selectEditUser } from '../../../store/slices/user.slice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { CiEdit } from 'react-icons/ci'
import { AiOutlineDelete } from 'react-icons/ai'
import UserStatus from '../../../components/status/UserStatus'
import AddEditUser from '../../../components/dasboard/quan-ly-nguoi-dung/AddEditUser'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const ManageUser = () => {
  const dispatch = useAppDispatch()

  const listUsers = useSelector((state: RootState) => state.user.listUsers)

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: number) => <UserStatus status={status} />,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => {
        return (
          <Space size='middle'>
            <Tooltip
              title={<span className='text-black'>Cập nhật người dùng</span>}
              color='white'
            >
              <CiEdit
                size={24}
                onClick={()=> dispatch(selectEditUser(record))}
                className='cursor-pointer text-blue-600'
              />
            </Tooltip>
            <Tooltip
              title={<span className='text-black'>Xóa người dùng</span>}
              color='white'
            >
              <AiOutlineDelete
                size={24}
                className='cursor-pointer text-red-600'
              />
            </Tooltip>
          </Space>
        )
      }
    },
  ]



  useEffect(() => {
    dispatch(getListUser())
  }, [])

  return (
    <div className=''>
      <Table columns={columns} dataSource={listUsers} pagination={false} />

      <div className='flex justify-end mt-4'>
        <Pagination defaultCurrent={6} total={500} />
      </div>

      <AddEditUser />
    </div>
  )
}

export default ManageUser
