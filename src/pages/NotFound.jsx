import { useRouteError } from 'react-router-dom'

const NotFound = () => {
	const error = useRouteError()

	console.log( error )

	return (
		<div className="not-found">
			<h1>404 - page not found!</h1>
			<p>{ error.statusText || error.message }</p>
		</div>
	)
}

export default NotFound
