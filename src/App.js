import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const App = () => {
	return (
		<div id="app" className="min-h-screen flex flex-col">
			<Header />

			<div className="wrapper flex flex-wrap mt-10">
				<div className="container mx-auto flex flex-wrap justify-between">
					<Sidebar />

					<main className="content w-[calc(100%-25rem)]">
						<Outlet />
					</main>
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default App
