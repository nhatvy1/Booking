import { RiGroupLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import ManageUser from "../pages/admin/manage-user/ManageUser";
import ManageRole from "../pages/admin/manage-role/ManageRole";
import HomeIntroduce from "../components/pagesComponent/Introduce/HomeIntroduce";

export const links = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: <IoHomeOutline />,
    element: <HomeIntroduce />
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