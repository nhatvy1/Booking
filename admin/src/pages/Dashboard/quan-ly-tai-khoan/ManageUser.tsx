import { Modal, Pagination, Space, Table } from 'antd'
import type { TableProps } from 'antd'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useEffect } from 'react'
import { getListUser } from '../../../store/slices/user.slice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { CiEdit } from 'react-icons/ci'
import { AiOutlineDelete } from 'react-icons/ai'
import UserStatus from '../../../components/status/UserStatus'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const ManageUser = () => {
  const dispatch = useAppDispatch()
  
  const listUsers = useSelector((state: RootState)=> state.user.listUsers)

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
      render: (status: number)=> <UserStatus status={status} />
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size='middle'>
          <CiEdit size={24}/>
          <AiOutlineDelete size={24}/>
        </Space>
      ),
    },
  ]

  useEffect(()=> {
    dispatch(getListUser())
  }, [])

  return (
    <div className=''>
      <Table columns={columns} dataSource={listUsers} pagination={false}/>

      <div className='flex justify-end mt-4'>
        <Pagination defaultCurrent={6} total={500} />
      </div>

      <Modal title="Thêm người dùng" open={true}>

      </Modal>
    </div>
  )
}

export default ManageUser
