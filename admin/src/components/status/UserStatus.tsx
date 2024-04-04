interface Props {
  status: number
}

const renderStatus = (status: number) => {
  switch (status) {
    case 0:
      return (
        <span className='bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500'>
          Chờ duyệt
        </span>
      )
    case 1:
      return (
        <span className='bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400'>
          Đã duyệt
        </span>
      )
    case -1:
      return (
        <span className='bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400'>
          Bị khóa
        </span>
      )
    default:
      return (
        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">No data</span>

      )
  }
}

const UserStatus = ({ status }: Props) => {
  return renderStatus(status)
}

export default UserStatus
