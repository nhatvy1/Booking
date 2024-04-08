import { Button, Drawer, Form, Input, Select } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { closeEditUserModal, updateUserById } from '../../../store/slices/user.slice'
import { useEffect } from 'react'

const AddEditUser = () => {
  const dispatch = useAppDispatch()
  const { currentUser, editUserModal } = useSelector((state: RootState) => state.user)

  const onFinish = async (values: IUser) => {
    dispatch(updateUserById({ id: currentUser.id || -1, body: values }))
  }

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue(currentUser)
  }, [currentUser])

  return (
    <Drawer
      title='Thêm người dùng'
      open={editUserModal}
      footer={null}
      onClose={() => dispatch(closeEditUserModal())}
    >
      <Form onFinish={onFinish} layout='vertical' form={form}>
        <Form.Item label='Email'>
          <Input placeholder='Nhập email' value={currentUser.email} disabled />
        </Form.Item>
        <Form.Item label='Email' name='fullName'>
          <Input placeholder='Nhập họ tên' />
        </Form.Item>
        <Form.Item label='Trạng thái' className='mt-2' name='status'>
          <Select
            style={{ width: 120 }}
            onChange={(value: number) => console.log('Check value: ', value)}
            options={[
              { value: 1, label: 'Chờ duyệt' },
              { value: -1, label: 'Khóa' },
              { value: 0, label: 'Duyệt' },
            ]}
            className='!w-3/5'
          />
        </Form.Item>
        <Button htmlType='submit' className='mt-4'>
          Cập nhật
        </Button>
      </Form>
    </Drawer>
  )
}

export default AddEditUser
