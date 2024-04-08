import { Button, Drawer, Form, Input, Select } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { closeEditUserModal } from '../../../store/slices/user.slice'
import { useEffect } from 'react'

const AddEditUser = () => {
  const dispatch = useAppDispatch()
  const { currentUser, editUserModal } = useSelector((state: RootState) => state.user)

  const onFinish = (values: any) => {
    console.log('Check values: ', values)
  }

  const [form] = Form.useForm()

  useEffect(()=> {
    form.setFieldsValue({
      email: currentUser.email
    })
  }, [currentUser])

  return (
    <Drawer
      title='Thêm người dùng'
      open={editUserModal}
      footer={null}
      onClose={() => dispatch(closeEditUserModal())}
    >
      <Form
        onFinish={onFinish}
        layout='vertical'
        form={form}
      >
        <Form.Item label='Email' name='email'>
          <Input placeholder='Nhập email' />
        </Form.Item>
        <Form.Item label='Trạng thái' className='mt-2' name='status'>
          <Select
            defaultValue={-1}
            style={{ width: 120 }}
            name='status'
            onChange={(value: number) => console.log('Check value: ', value)}
            options={[
              { value: 1, label: 'Duyệt' },
              { value: -1, label: 'Chờ duyệt' },
              { value: 0, label: 'Đang hoạt động' },
            ]}
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
