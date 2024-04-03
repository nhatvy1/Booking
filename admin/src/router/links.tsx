import { RiGroupLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ManageUser from "../pages/Dashboard/quan-ly-tai-khoan/ManageUser";

export const links = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: IoHomeOutline,
    element: <DashboardHome />
  },
  {
    name: 'Quản lý tài khoản',
    href: '/admin/quan-ly-tai-khoan',
    icon: RiGroupLine,
    element: <ManageUser />
  },
  {
    name: 'Quản lý tài khoản',
    href: '/admin/quan-ly-phan-quyen',
    icon: RiGroupLine,
    element: <h1>Quan ly phan quyen</h1>
  },
]