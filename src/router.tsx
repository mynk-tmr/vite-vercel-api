import { createBrowserRouter, Outlet, RouterProvider } from 'react-router'
import { NotFound } from './components/404'
import { Home } from './components/Home'
import { routeLog, sendtoHome } from './middlewares/roots'

export const MainRouter: React.FC = () => {
	return <RouterProvider router={routes} />
}

const routes = createBrowserRouter([
	{
		path: '/',
		middleware: [routeLog, sendtoHome],
		element: <Outlet />,
		children: [
			{ path: '/home', Component: Home },
			{ path: '*', Component: NotFound },
		],
	},
])
