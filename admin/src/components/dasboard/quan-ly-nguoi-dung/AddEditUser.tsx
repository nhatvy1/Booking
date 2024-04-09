import { Button, Drawer, Form, Input, Select } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { closeEditUserModal, createUser, updateUserById } from '../../../store/slices/user.slice'
import { useEffect } from 'react'

const AddEditUser = () => {
  const dispatch = useAppDispatch()
  const { currentUser, editUserModal } = useSelector((state: RootState) => state.user)

  const onFinish = async (values: IUser) => {
    currentUser.id
      ? dispatch(updateUserById({ id: currentUser.id || -1, body: values }))
      : dispatch(createUser(values))

    form.resetFields()
  }

  const [form] = Form.useForm()

  useEffect(() => {
    if (currentUser.id) {
      form.setFieldsValue(currentUser)
    }
  }, [currentUser])

  return (
    <Drawer
      title={currentUser.id ? 'Cập nhật người dùng' : 'Thêm người dùng'}
      open={editUserModal}
      footer={null}
      onClose={() => dispatch(closeEditUserModal())}
    >
      <Form onFinish={onFinish} layout='vertical' form={form}>
        <Form.Item label='Email' name='email'>
          <Input
            placeholder='Nhập email'
            value={currentUser.email}
            disabled={currentUser.id ? true : false}
          />
        </Form.Item>
        <Form.Item label='Họ tên' name='fullName'>
          <Input placeholder='Nhập họ tên' />
        </Form.Item>
        {!currentUser.id && (
          <Form.Item label='Mật khẩu' name='password'>
            <Input.Password placeholder='Nhập họ tên' />
          </Form.Item>
        )}
        <Form.Item label='Trạng thái' className='mt-2' name='status'>
          <Select
            style={{ width: 120 }}
            onChange={(value: number) => console.log('Check value: ', value)}
            options={[
              { value: 1, label: 'Duyệt' },
              { value: -1, label: 'Khóa' },
              { value: 0, label: 'Chờ duyệt' },
            ]}
            className='!w-3/5'
          />
        </Form.Item>
        <Button htmlType='submit' className='mt-4'>
          {currentUser.id ? 'Cập nhật' : 'Thêm mới'}
        </Button>
      </Form>
    </Drawer>
  )
}

export default AddEditUser
