import { Pagination, Space, Table, Tooltip } from 'antd'
import type { TableProps } from 'antd'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { lazy, Suspense, useEffect, useState } from 'react'
import { addUser, getListUser, selectEditUser } from '../../../store/slices/user.slice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { CiEdit } from 'react-icons/ci'
import { AiOutlineDelete } from 'react-icons/ai'
import UserStatus from '../../../components/status/UserStatus'
import AddEditUser from '../../../components/dasboard/quan-ly-nguoi-dung/AddEditUser'
import { useLocation } from 'react-router-dom'

const ManageUser = () => {
  // const { search } = useLocation() // get the search ( query string) from the location

  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const dispatch = useAppDispatch()

  const { listUsers, totalResults } = useSelector((state: RootState) => state.user)

  const columns: TableProps<IUser>['columns'] = [
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
            <Tooltip title={<span className='text-black'>Cập nhật người dùng</span>} color='white'>
              <div>
                <CiEdit
                  size={24}
                  onClick={() => dispatch(selectEditUser(record))}
                  className='cursor-pointer text-blue-600'
                />
              </div>
            </Tooltip>
            <Tooltip title={<span className='text-black'>Xóa người dùng</span>} color='white'>
              <div>
                <AiOutlineDelete size={24} className='cursor-pointer text-red-600' />
              </div>
            </Tooltip>
          </Space>
        )
      },
    },
  ]

  const handleOnChange = (page: number, limit: number) => {
    setPage(page)
    setLimit(limit)
  }

  useEffect(() => {
    dispatch(getListUser({ page, limit }))
  }, [page, limit])

  return (
    <div className='mb-3'>
      <div className='flex justify-end mb-3'>
        <button className='p-2 bg-meta-5 rounded-md text-white' onClick={() => dispatch(addUser())}>
          Thêm người dùng
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={listUsers}
        pagination={false}
        rowKey={(record: any) => record.id}
      />

      <div className='flex justify-end mt-4'>
        <Pagination
          current={page || 1}
          total={totalResults}
          pageSize={limit}
          onChange={handleOnChange}
          showSizeChanger
          pageSizeOptions={[5, 10, 20]}
        />
      </div>

      <AddEditUser />
    </div>
  )
}

export default ManageUser
