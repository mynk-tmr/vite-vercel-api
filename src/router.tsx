import { createBrowserRouter, RouterProvider } from 'react-router'
import { NotFound } from './components/404'
import routeLog from './middlewares/routelog'

export const MainRouter: React.FC = () => {
  return <RouterProvider router={routes} />
}

const routes = createBrowserRouter([
  {
    path: '/',
    middleware: [routeLog],
    children: [
      {
        path: '/home',
        element: (
          <div>
            <h1>Home</h1>
            <article>
              Open <code>console</code>, Edit <code>src/router.tsx</code>.
              <br />
              <br />
              Built with <mark>dev.css</mark> and <mark>rsbuild</mark>.
            </article>
          </div>
        ),
      },
      { path: '*', Component: NotFound },
    ],
  },
])
