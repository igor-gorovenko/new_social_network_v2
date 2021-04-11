import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import NavbarProfile from './NavbarProfile/NavbarProfile'

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<NavbarProfile />

			<div className={style.item}>
				<NavLink to='/mypost'>My post</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to='/news'>News</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to='/dialogs'>Dialogs</NavLink>
			</div>

			<div className={style.logo}>LOGO</div>
		</nav>
	)
}

export default Navbar
