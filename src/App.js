import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
	return (
		<div id="app">
			<Header />

			<div className="wrapper">
				<Outlet />
			</div>

			<Footer />
		</div>
	)
}

export default App
