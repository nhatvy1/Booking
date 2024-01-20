import useRouteElements from './router/useRouteElement'

function App() {
  const routeElements = useRouteElements()

  return <>{routeElements}</>
}

export default App
