import { RiGroupLine } from "react-icons/ri";
import Content from "../components/Content/Content";
import { IoHomeOutline } from "react-icons/io5";

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
    element: <Content />
  },
  {
    name: 'Quản lý tài khoản',
    href: '/admin/quan-ly-team',
    icon: <RiGroupLine />,
    element: <h1>Quan ly team</h1>
  },
]