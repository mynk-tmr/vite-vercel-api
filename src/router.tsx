import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import { NotFound } from './NotFound'

export const MainRouter: React.FC = () => {
  return <RouterProvider router={routes} />
}

const routes = createBrowserRouter([
  { path: '/home', Component: App },
  { path: '*', Component: NotFound },
])
