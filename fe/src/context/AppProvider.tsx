'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

const AppContext = createContext({
  sessionToken: '',
  setSessionToken: (sessionToken: string) => {},
})

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}

export default function AppProvider({
  children,
  initialSessionToken = '',
}: {
  children: ReactNode
  initialSessionToken?: string
}) {
  const [sessionToken, setSessionToken] = useState(initialSessionToken)
  return (
    <AppContext.Provider value={{ sessionToken, setSessionToken }}>{children}</AppContext.Provider>
  )
}
