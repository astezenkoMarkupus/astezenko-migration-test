import Navigation from '../Navigation/Navigation'
import s from './Header.module.scss'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className={ s.header }>
			<div className={ s['header-inner'] }>
				<NavLink to='/' className={ s['logo'] }>
					<img src={ logo } alt="Logo" />
				</NavLink>

				<Navigation />
			</div>
		</header>
	)
}

export default Header
