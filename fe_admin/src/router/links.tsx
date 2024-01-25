import { RiGroupLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import ManageUser from "../pages/admin/manage-user/ManageUser";

export const links = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: <IoHomeOutline />,
    element: <h1>Trang chu admin</h1>
  },
  {
    name: 'Quản lý tài khoản',
    href: '/admin/quan-ly-tai-khoan',
    icon: <RiGroupLine />,
    element: <ManageUser />
  },
  {
    name: 'Quản lý tài khoản',
    href: '/admin/quan-ly-team',
    icon: <RiGroupLine />,
    element: <h1>Quan ly team</h1>
  },
]