import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav className="nav">
			<ul className="menu">
				<li className="menu-item">
					<NavLink to="/" className={ ( { isActive } ) => isActive ? 'active' : '' }>Home</NavLink>
				</li>
				<li className="menu-item">
					<NavLink to="/characters" className={ ( { isActive } ) => isActive ? 'active' : '' }>Characters</NavLink>
				</li>
				<li className="menu-item">
					<NavLink to="/locations" className={ ( { isActive } ) => isActive ? 'active' : '' }>Locations</NavLink>
				</li>
				<li className="menu-item">
					<NavLink to="/episodes" className={ ( { isActive } ) => isActive ? 'active' : '' }>Episodes</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
