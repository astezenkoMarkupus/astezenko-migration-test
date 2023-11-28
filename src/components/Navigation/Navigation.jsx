import { NavLink } from 'react-router-dom'
import s from './Navigation.module.scss'

const Navigation = () => {
	return (
		<nav className={ s.nav }>
			<ul className={ s.menu }>
				<li className={ s['menu-item'] }>
					<NavLink to="/" className={ ( { isActive } ) => isActive ? s['active'] : '' }>Home</NavLink>
				</li>
				<li className={ s['menu-item'] }>
					<NavLink to="/characters" className={ ( { isActive } ) => isActive ? s['active'] : '' }>Characters</NavLink>
				</li>
				<li className={ s['menu-item'] }>
					<NavLink to="/locations" className={ ( { isActive } ) => isActive ? s['active'] : '' }>Locations</NavLink>
				</li>
				<li className={ s['menu-item'] }>
					<NavLink to="/episodes" className={ ( { isActive } ) => isActive ? s['active'] : '' }>Episodes</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
