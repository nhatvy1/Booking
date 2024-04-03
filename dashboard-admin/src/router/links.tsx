import { RiGroupLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";

export const links = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: <IoHomeOutline />,
    element: <h1>Admin</h1>
  },
  {
    name: 'Quản lý tài khoản',
    href: '/admin/quan-ly-tai-khoan',
    icon: <RiGroupLine />,
    element: <h1>Quan ly tai khoan</h1>
  },
  {
    name: 'Quản lý tài khoản',
    href: '/admin/quan-ly-phan-quyen',
    icon: <RiGroupLine />,
    element: <h1>Quan ly phan quyen</h1>
  },
]