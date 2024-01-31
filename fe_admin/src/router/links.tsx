import { RiGroupLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import ManageUser from "../pages/admin/manage-user/ManageUser";
import ManageRole from "../pages/admin/manage-role/ManageRole";

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
    href: '/admin/quan-ly-phan-quyen',
    icon: <RiGroupLine />,
    element: <ManageRole />
  },
]