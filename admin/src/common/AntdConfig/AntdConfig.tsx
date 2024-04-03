import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'

const AntdConfigProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Montserrat, sans-serif', // Kiểu chữ
        },
        components: {
          Select: {
            optionActiveBg: '#EEEEEE',
            optionSelectedBg: '#DDDDDD',
            padding: 0,
          },
          Switch: {
            controlHeight: 48,
            controlHeightSM: 36,
            colorIconHover: 'red',
          },
          Form: {
            verticalLabelPadding: '0 0 8px',
            itemMarginBottom: 0,
            hoverBorderColor: 'none'
          },
          Input: {
            outline: 'none'
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default AntdConfigProvider
