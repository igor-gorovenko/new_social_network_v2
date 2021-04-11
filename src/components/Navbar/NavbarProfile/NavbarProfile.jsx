import { NavLink } from 'react-router-dom'
import style from './NavbarProfile.module.css'

const NavbarProfile = () => {
	return (
		<div className='NavbarProfile'>
			<div className={style.avatar}></div>
			<NavLink to='/profileinfo' className={style.fullName}>
				Igor Gorovenko
			</NavLink>
		</div>
	)
}

export default NavbarProfile
