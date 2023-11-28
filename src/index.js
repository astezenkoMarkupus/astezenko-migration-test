import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App'
import Characters from './pages/Characters'
import NotFound from './pages/NotFound'
import Locations from './pages/Locations'
import Episodes from './pages/Episodes'
import Home from './pages/Home'

const router = createBrowserRouter( [
	{
		path		: '/',
		element		: <App />,
		errorElement: <NotFound />,
		children	: [
			{
				path	: '/',
				element	: <Home />
			},
			{
				path	: 'characters',
				element	: <Characters />
			},
			{
				path	: 'locations',
				element	: <Locations />
			},
			{
				path	: 'episodes',
				element	: <Episodes />
			}
		]
	}
] )

const root = ReactDOM.createRoot( document.getElementById( 'root' ) )

root.render(
	<React.StrictMode>
		<RouterProvider router={ router } />
	</React.StrictMode>
)
