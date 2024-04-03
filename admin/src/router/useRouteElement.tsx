import { Navigate, useRoutes } from 'react-router-dom'
import { links } from './links'
import LayoutAdmin from '../layout/LayoutAdmin'
import Login from '../pages/Authentication/Login'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const useRouteElements = () => {
  function ProtectedHomePage() {
    const { token } = useSelector((state: RootState)=> state.auth.auth)

    if(token) {
      return <Navigate to='/admin' />
    }
    return <Navigate to='/login' />
  }

  function ProtectedRoute() {
    const { token } = useSelector((state: RootState)=> state.auth.auth)

    if (!token) {
      return <Navigate to='/login' />
    }

    return <LayoutAdmin />
  }
 
  function getRoutes(links: any) {
    const routes: any = []

    links.forEach((link: any) => {
      routes.push({
        path: link.href,
        element: link.element,
      })
    })

    const uniqueRoutes = [...new Set(routes.map((r: any) => r.path))].map(
      (path) => {
        return routes.find((r: any) => r.path === path)
      },
    )
    return uniqueRoutes
  }

  const routeElements = useRoutes([
    {
      path: '/',
      element: ProtectedHomePage()
    },
    {
      path: '/admin',
      element: ProtectedRoute(),
      children: getRoutes(links).map((route: any) => ({
        ...route,
        element: route.element,
      })),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <h1>Register</h1>,
    },
  ])

  return routeElements
}

export default useRouteElements
