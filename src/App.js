import { createBrowserRouter } from 'react-router-dom';
// import DetailSong from './Detail';
import DetailCard from './DetailCard';
import GuidedRoute from './GuidedRoute';
import Home from './Home';
import Login from './Login';

export const currentRoutes = createBrowserRouter([
	{
		path: '/',
		element: (
			<GuidedRoute>
				<Home />
			</GuidedRoute>
		),
		// loader: rootLoader,
	},
	{
		path: 'detail/:id',
		element: (
			<GuidedRoute>
				<DetailCard />
			</GuidedRoute>
		),
	},

	{
		path: 'login',
		element: <Login />,
	},
]);
