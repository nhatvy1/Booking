import { useRoutes } from 'react-router-dom'
import HomeAdmin from '../pages/admin/HomeAdmin'
import { links } from './links'

const useRouteElements = () => {
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
      path: '/admin',
      element: <HomeAdmin />,
      children: getRoutes(links).map((route: any) => ({
        ...route,
        element: route.element,
      })),
    },
    {
      path: '/login',
      element: <h1>Login</h1>,
    },
    {
      path: 'register',
      element: <h1>Register</h1>,
    },
  ])

  return routeElements
}

export default useRouteElements
