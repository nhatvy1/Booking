import Link from 'next/link'

export default function Home() {
  return (
    <div className='m-5'>
      <Link href='/' className='p-3 border rounded-md'>
        Đăng xuất
      </Link>
    </div>
  )
}
