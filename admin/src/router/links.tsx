import { RiGroupLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ManageUser from "../pages/Dashboard/quan-ly-tai-khoan/ManageUser";
import { MdOutlineLocalHotel, MdOutlineSecurity } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { PiNewspaperClippingLight } from "react-icons/pi";

export const links = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: IoHomeOutline,
    element: <DashboardHome />
  },
  {
    name: 'Quản lý danh mục',
    href: '/admin/quan-ly-danh-muc',
    icon: BiCategory,
    element: <h1>Quan ly danh muc</h1>
  },
  {
    name: 'Quản lý khách sạn',
    href: '/admin/quan-ly-khách sạn',
    icon: MdOutlineLocalHotel,
    element: <h1>Quan ly khách sạn</h1>
  },
  {
    name: 'Quản lý bài viết',
    href: '/admin/quan-ly-bai-viet',
    icon: PiNewspaperClippingLight,
    element: <h1>Quan ly Bài viết</h1>
  },
  {
    name: 'Quản lý tài khoản',
    href: '/admin/quan-ly-tai-khoan',
    icon: RiGroupLine,
    element: <ManageUser />
  },
  {
    name: 'Quản lý phân quyền',
    href: '/admin/quan-ly-phan-quyen',
    icon: MdOutlineSecurity,
    element: <h1>Quan ly phan quyen</h1>
  }
]