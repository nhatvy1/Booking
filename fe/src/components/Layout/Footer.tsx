import Link from 'next/link'
import MainSection from '../Commons/Section'

const Footer = () => {
  const list = [
    {
      title: 'Hỗ trợ',
      links: [
        { href: '#', text: 'Trung tâm trợ giúp' },
        { href: '#', text: 'AirCover' },
        { href: '#', text: 'Chống phân biệt đối xử' },
        { href: '#', text: 'Hỗ trợ người khuyết tật' },
        { href: '#', text: 'Các tùy chọn hủy' },
        { href: '#', text: 'Báo cáo lo ngại của khu dân cư' },
      ],
    },
    {
      title: 'Đón tiếp khách',
      links: [
        { href: '#', text: 'Cho thuê nhà trên Airbnb' },
        { href: '#', text: 'AirCover cho Chủ nhà' },
        { href: '#', text: 'Tài nguyên về đón tiếp khách' },
        { href: '#', text: 'Diễn đàn cộng đồng' },
        { href: '#', text: 'Đón khách có trách nhiệm' },
        { href: '#', text: 'Khóa học miễn phí về Đón khách' },
      ],
    },
    {
      title: 'Airbnb',
      links: [
        { href: '#', text: 'Trang tin tức' },
        { href: '#', text: 'Tính năng mới' },
        { href: '#', text: 'Cơ hội nghề nghiệp' },
        { href: '#', text: 'Nhà đầu tư' },
        { href: '#', text: 'Chỗ ở khẩn cấp ở Airbnb.org' },
      ],
    },
  ]
  return (
    <MainSection className='border py-12 bg-faint shadow-custom-1'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex'>
          {list.map((item, index) => (
            <div className='basis-1/3' key={index}>
              <h3 className='font-medium mb-2'>{item.title}</h3>
              <ul>
                {item.links.map((link, keyLink) => (
                  <li key={keyLink} className='my-1'>
                    <Link href={link.href} className='text-sm'>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </MainSection>
  )
}

export default Footer
