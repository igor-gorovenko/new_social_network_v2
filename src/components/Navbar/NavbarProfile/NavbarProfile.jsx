import { NavLink } from 'react-router-dom'
import style from './NavbarProfile.module.css'

const NavbarProfile = () => {
	return (
		<div className='NavbarProfile'>
			<img className={style.avatar}></img>
			<NavLink to='/profileinfo' className={style.fullName}>
				Igor Gorovenko
			</NavLink>
		</div>
	)
}

export default NavbarProfile
